/* 
async-await 
-----------
async function always returns a promise.
    syntax to write a async function:
        async function myFunc() {...}

await pause the execution of its surrounding async function until the promise is settled.
we can make any normal function to async function
*/


// basic example of api call
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200)
        }, 2000);
    })
}

async function getWeather(){
    await api(); //1st call
    await api(); //2nd call
}

async function hello(){
    console.log("Hello World")
}


 /* async-await */
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data: ", dataId);
            resolve("success");
        }, 2000);
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

// //iife - immediately invoked function expression
(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
})()