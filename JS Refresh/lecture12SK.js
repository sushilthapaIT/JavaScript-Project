//sync 

console.log("one");
console.log("two");

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
