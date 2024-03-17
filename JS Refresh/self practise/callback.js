let userInput1 = parseInt(prompt("Enter 1st num"));
let userInput2 = parseInt(prompt("Enter 2nd num"));

function sum(a, b){
    return `The sum of ${a} + ${b} is ${a+b}`
}

function sub(a, b){
    return `The subtraction of  ${a} - ${b} is ${a-b}`
}

function mul(a, b){
    return `The subtraction of  ${a} * ${b} is ${a*b}`
}

function div(a, b){
    return `The subtraction of  ${a} / ${b} is ${a/b}`
}

function letsCalculate(a, b, fn){
    console.log(fn(a,b, fn()));
}

letsCalculate(userInput1, userInput2, sum)