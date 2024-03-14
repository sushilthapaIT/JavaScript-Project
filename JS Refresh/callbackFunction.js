// Callbacks in JavaScript
function display(result){
    console.log(result)
}

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum)
}

add(2, 4, display)


function square(n){
    return n * n
}

function cube(n){
    return n * n * n
}

function sumSquare(a, b){
    const val1 = square(a)
    const val2 = square(b)

    return val1 + val2
}

function sumCube(a, b){
    const val1 = cube(a)
    const val2 = cube(b)

    return val1 + val2
}

console.log(sumCube(2, 4))



function square(n){
    return n * n
}


function cube(n){
    return n*n*n
}

function call(a, b, callback){
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2
}

const res = call(2, 3, square);
const ser = call(2, 3, cube);

console.log("The sum of cube is " +res);
console.log("The sum of square is " +ser);