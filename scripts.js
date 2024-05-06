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
