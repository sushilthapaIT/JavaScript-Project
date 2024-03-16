//promise is for eventual completion of task. it is an object in JS
//it is a solution to callback hell

// syntax to write promise
// let promise = new Promise((resolve, reject) => {...})

// promise.then((res) => {}) ---->resolved
// promise.then((err) => {}) ---->rejected


let promise = new Promise((resolve, reject) => {
    console.log("I am a promise")
    resolve("success")
})

let promiseI = new Promise((resolve, reject) => {
    console.log("I am a promise")
    resolve("problem solved")
    reject("some error occurred")
})

let myPromise = new Promise((resolve, reject) => {
    console.log("Data Send")
    setTimeout(()=>{
        resolve("I am solved")
        console.log(("I am solved"))
    }, 2000)
})



function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData){
                getNextData()
            }
        }, 5000);
    });
}



// to use promise
// .then() & .catch()

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
    });
}


let promiise = getPromise();
promiise.then(() => {
    console.log("promise fulfilled");
});

let nayaPromise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
})


// promise
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}


function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}



console.log("getting data1...")
asyncFunc1().then((res) => {
    console.log("getting data2...")
    asyncFunc2().then((res) => {
    });
});


//// promise chain

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("data", dataId);
            resolve("success")
        }, 3000)
    })
} 

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res)
    })

// // // getData(1).then((res) => {
// // //     console.log(res);
// // //     getData(2).then((res) => {
// // //         console.log(res);
// // //     });
// // // })