document.getElementById("calculateSilverButton").addEventListener("click", function() {
    var initialWeight = parseFloat(document.getElementById("initialWeight").value);
    var initialPurity = parseFloat(document.getElementById("initialPurity").value);
    var desiredPurity = parseFloat(document.getElementById("desiredPurity").value);
    var additionalPurity = parseFloat(document.getElementById("additionalPurity").value);

    var x = (initialWeight * (desiredPurity - initialPurity)) / (additionalPurity - desiredPurity);
    var totalWeight = initialWeight + x;

    document.getElementById("silverResult").innerHTML = "To achieve a purity of " + desiredPurity.toFixed(2) + "%, you need to add approximately " + x.toFixed(3) + " kg of material with a purity of " + additionalPurity.toFixed(2) + "%. Total weight after addition would be " + totalWeight.toFixed(3) + " kg.";
});

document.getElementById("calculateCopperButton").addEventListener("click", function() {
    var initialSilverWeight = parseFloat(document.getElementById("initialSilverWeight").value);
    var initialSilverPurity = parseFloat(document.getElementById("initialSilverPurity").value);
    var desiredCopperPurity = parseFloat(document.getElementById("desiredCopperPurity").value);

    var totalSilverWeight = initialSilverWeight * initialSilverPurity;
    var totalMixtureWeight = totalSilverWeight / desiredCopperPurity;
    var copperWeight = totalMixtureWeight - initialSilverWeight;

    document.getElementById("copperResult").innerHTML = "To achieve a purity of " + desiredCopperPurity.toFixed(2) + "%, you need to add approximately " + copperWeight.toFixed(3) + " kg of copper. Total weight after addition would be " + totalMixtureWeight.toFixed(3) + " kg.";
});

document.getElementById("addInputButton").addEventListener("click", function() {
    var inputsRow1 = document.getElementById("inputsRow1");
    var inputsRow2 = document.getElementById("inputsRow2");
    var inputsRow3 = document.getElementById("inputsRow3");
    
    var numInputsRow1 = inputsRow1.querySelectorAll("input").length / 2;
    var numInputsRow2 = inputsRow2.querySelectorAll("input").length / 2;
    var numInputsRow3 = inputsRow3.querySelectorAll("input").length / 2;
    var numInputs = Math.max(numInputsRow1, numInputsRow2, numInputsRow3) + 1;

    var quantityInput = "<label for='quantity" + numInputs + "'>Quantity " + numInputs + " (gm):</label>" +
                        "<input type='number' id='quantity" + numInputs + "' name='quantity" + numInputs + "' step='0.001' required><br>";
    var purityInput = "<label for='purity" + numInputs + "'>Purity of Quantity " + numInputs + " (%):</label>" +
                      "<input type='number' id='purity" + numInputs + "' name='purity" + numInputs + "' step='0.001' required><br>";

    // Add new inputs to the row with the fewest inputs
    if (numInputsRow1 <= numInputsRow2 && numInputsRow1 <= numInputsRow3) {
        inputsRow1.innerHTML += quantityInput + purityInput;
    } else if (numInputsRow2 <= numInputsRow1 && numInputsRow2 <= numInputsRow3) {
        inputsRow2.innerHTML += quantityInput + purityInput;
    } else {
        inputsRow3.innerHTML += quantityInput + purityInput;
    }

    // Show remove button when there's at least one input
    document.getElementById("removeInputButton").style.display = "inline";
});


document.getElementById("removeInputButton").addEventListener("click", function() {
    var inputsRow1 = document.getElementById("inputsRow1");
    var inputsRow2 = document.getElementById("inputsRow2");
    var inputsRow3 = document.getElementById("inputsRow3");

    // Remove the last input field pair from the row with the most inputs
    if (inputsRow1.children.length >= inputsRow2.children.length && inputsRow1.children.length >= inputsRow3.children.length && inputsRow1.children.length > 0) {
        inputsRow1.removeChild(inputsRow1.lastElementChild); // Remove purity input
        inputsRow1.removeChild(inputsRow1.lastElementChild); // Remove quantity input
    } else if (inputsRow2.children.length >= inputsRow1.children.length && inputsRow2.children.length >= inputsRow3.children.length && inputsRow2.children.length > 0) {
        inputsRow2.removeChild(inputsRow2.lastElementChild); // Remove purity input
        inputsRow2.removeChild(inputsRow2.lastElementChild); // Remove quantity input
    } else if (inputsRow3.children.length > 0) {
        inputsRow3.removeChild(inputsRow3.lastElementChild); // Remove purity input
        inputsRow3.removeChild(inputsRow3.lastElementChild); // Remove quantity input
    }

    // Hide remove button if only one input remains
    if (inputsRow1.children.length === 0 && inputsRow2.children.length === 0 && inputsRow3.children.length === 0) {
        document.getElementById("removeInputButton").style.display = "none";
    }
});

// Function to calculate total pure silver
function calculateTotalPureSilver() {
    var inputsRow1 = document.getElementById("inputsRow1");
    var inputsRow2 = document.getElementById("inputsRow2");
    var inputsRow3 = document.getElementById("inputsRow3");
    
    var totalPureSilver = 0;

    // Calculate total pure silver from inputs in the first row
    totalPureSilver += calculatePureSilverFromRow(inputsRow1);

    // Calculate total pure silver from inputs in the second row
    totalPureSilver += calculatePureSilverFromRow(inputsRow2);

    // Calculate total pure silver from inputs in the third row
    totalPureSilver += calculatePureSilverFromRow(inputsRow3);

    // Display the result
    document.getElementById("pureSilverResult").textContent = "Total Pure Silver obtained: " + totalPureSilver.toFixed(3) + " kg.";
}

// Function to calculate pure silver from a row of inputs
function calculatePureSilverFromRow(row) {
    var inputs = row.querySelectorAll("input[type='number']");
    var totalPureSilverInRow = 0;

    for (var i = 0; i < inputs.length; i += 2) { // Every pair of inputs consists of quantity and purity
        var quantity = parseFloat(inputs[i].value);
        var purity = parseFloat(inputs[i + 1].value);

        var pureSilver = (quantity * purity) / 100;
        totalPureSilverInRow += pureSilver;
    }

    return totalPureSilverInRow;
}

document.getElementById("addInputButton").addEventListener("click", function() {
    // Code to add new input fields
});

document.getElementById("removeInputButton").addEventListener("click", function() {
    // Code to remove input fields
});

document.getElementById("calculatePureSilverButton").addEventListener("click", function() {
    calculateTotalPureSilver();
});
