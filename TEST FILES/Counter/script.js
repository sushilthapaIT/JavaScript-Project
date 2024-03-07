const content = document.querySelector(".content");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");

let val = 0;

increase.addEventListener("click",  () => {
    val = val + 1
    content.innerHTML = val;
})

reset.addEventListener("click", () => {
    val = 0;
    content.innerHTML = val;
})

decrease.addEventListener("click", () => {
    val = val - 1;
    content.innerHTML = val;
})
