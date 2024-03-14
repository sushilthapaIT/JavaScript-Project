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



function finSum(n){
    let ans = 0;
    for(let i = 1; i < n; i++){
        ans = ans + i;
    }

    return ans;
}


let val = finSum(10);
console.log(val)