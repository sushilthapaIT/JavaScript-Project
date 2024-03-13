// Callbacks in JavaScript
function display(result){
    console.log(result)
}

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    display(sum)
}

add(2, 4, display)