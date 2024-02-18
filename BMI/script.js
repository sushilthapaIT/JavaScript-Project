function calculateBMI() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const output = document.getElementById("output");

    result = input1.value * input2.value;

    output.innerHTML = `Your BMI INDEX IS ${result}`;
}


// function resetBMI() {
//     document.getElementById("form").reset();
//     console.log("reset clicked");
// }