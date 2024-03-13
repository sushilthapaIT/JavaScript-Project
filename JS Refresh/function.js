// basic

function sayHi(){
    console.log("Hello World!!!")
}


sayHi()
sayHi()
sayHi()
sayHi()


function Sum(a, b=9){
    console.log (a + b);
}


Sum(8, 2);


// returning data

function Plus(a, b){
    console.log("print")

    return a+b
    console.log("no print")
}

const value = Plus(1,2)
console.log(value);