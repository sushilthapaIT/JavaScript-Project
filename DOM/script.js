const btn = document.querySelector("#button");
const firNum = document.querySelector("#fnum");
const sirNum = document.querySelector("#snum");
const res = document.querySelector("#output");


function add(a, b){
    return a + b;
}

btn.addEventListener("click", () => {
    let one = parseInt(firNum.value);
    let two = parseInt(sirNum.value);
    let sum = add(one, two)
    res.innerText = `Sum is ${sum}`;

});

// btn.addEventListener("click", () => {
//     let one = parseInt(firNum.value);
//     let two = parseInt(sirNum.value);
//     let sum = add(one, two)
//     res.innerText = `Sum is ${sum}`;
    
// });

