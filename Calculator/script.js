const btn1 = document.querySelector(".one");
const inpu = document.querySelector(".inp");

console.log(inpu);
console.log(btn1);
let val = "";
btn1.addEventListener("click", reset = () => {
    val = "";
    inpu.innerText = val;
    console.log("reset clicked");
})
