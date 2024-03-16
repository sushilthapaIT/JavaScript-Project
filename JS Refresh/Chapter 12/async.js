/* 
async-await 
-----------
async function always returns a promise.
    syntax to write a async function:
        async function myFunc() {...}

await pause the execution of its surrounding async function until the promise is settled.
we can make any normal function to async function
*/


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200)
        }, 2000);
    })
}

async function hello(){
    console.log("Hello World")
}

