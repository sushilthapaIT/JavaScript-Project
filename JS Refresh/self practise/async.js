// function sum(a, b){
//     return `the sum of ${a} + ${b} is ${a + b} \n and i am await`
// }


// async function nw(){
//     console.log("Hi i am console log one")
//         await sum(1, 4); 
//     console.log("Hello and i am console log 3")
// }




function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data: ",dataId)
            resolve("Success")
        }, 2000);
    })
}


(async function gettingData(){
    console.log("getting data 1")
    await getData(1);
    console.log("getting data 2")
    await getData(2);
    console.log("getting data 3")
    await getData(3);
})()