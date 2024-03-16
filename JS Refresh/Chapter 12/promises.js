//promise is for eventual completion of task. it is an object in JS
//it is a solution to callback hell

// syntax to write promise
// let promise = new Promise((resolve, reject) => {...})


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     resolve("success")
// })

// let promiseI = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     resolve("problem solved")
//     reject("some error occurred")
// })

let myPromise = new Promise((resolve, reject) => {
    console.log("Data Send")
    setTimeout(()=>{
        resolve("I am solved")
        console.log(("I am solved"))
    }, 2000)
})