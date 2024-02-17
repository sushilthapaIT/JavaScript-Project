function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = weight / (height * height);
    document.getElementById('result').innerText = bmi.toFixed(2); // Display BMI rounded to 2 decimal places
    console.log(bmi);
}
