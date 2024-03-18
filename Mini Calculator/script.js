const fNum = document.getElementById("input1");
const sNum = document.getElementById("input2");

const addi = document.getElementById("add");
const subt = document.getElementById("sub");
const mult = document.getElementById("mul");
const divi = document.getElementById("div");

const resultField = document.getElementById("result");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if(b !== 0)
        return a / b;
    else
        return `Input field2 should be greater than 0.`
}


addi.addEventListener("click", () => {
    let one = parseInt(fNum.value);
    let two = parseInt(sNum.value);

    let sum = add(one, two);
    resultField.value = sum;
});


subt.addEventListener("click", () => {
    let one = parseInt(fNum.value);
    let two = parseInt(sNum.value);

    let subs = sub(one, two);
    resultField.value = subs;
});


mult.addEventListener("click", () => {
    let one = parseInt(fNum.value);
    let two = parseInt(sNum.value);

    let multi = mul(one, two);
    resultField.value = multi;
});


divi.addEventListener("click", () => {
    let one = parseInt(fNum.value);
    let two = parseInt(sNum.value);

    let divide = div(one, two);
    resultField.value = divide;
});


document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").value = "";
});
