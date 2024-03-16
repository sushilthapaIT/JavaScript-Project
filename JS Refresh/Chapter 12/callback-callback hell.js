// callback
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0){
        return `cannot process`
    }
    return a / b;
}

function giveBack(a, b, fn){
    console.log("The addition of a + b is: ", fn(a,b))
    fn()
}

giveBack(2,0,divide)
giveBack(2,5,add)
giveBack(2,3,subtract)
giveBack(2,5,multiply)





//sync 

console.log("one");
console.log("two");


//async
setTimeout( () => {
    console.log("i am settimout")
}, 2000)
console.log("three"); 


function getData(dataId){ 
    console.log("data", dataId)
}

getData(21)


// callback //nested callback
function getDaata(dataId, getNextData){ 
    setTimeout(()=>{
        console.log("data:", dataId);
        if(getNextData)
        {
            getNextData();
        }
    }, 2000);
}


// nested callbacks
// callback hell: nested callbacks stacked below one another forming a pyramid structure.
// pyramid of doom
getDaata(1, () => {
    console.log("getting data 2...")
    getDaata(2, () => {
        console.log("getting data 3...")
        getDaata(3, () => {
            console.log("getting data 4...")
            getDaata(4)
        })
    });
});
