const decrement = document.querySelector("#btn1");
const reset = document.querySelector("#btn2");
const increment = document.querySelector("#btn3");
const innerTxt = document.querySelector("#mark");
let val = 0;

decrement.addEventListener("click", 
    decrease = () =>  {
        val -= 1;
        innerTxt.innerText = val;
});

reset.addEventListener("click", 
    re = () => {
        val = 0;
        innerTxt.innerText = val;
});

increment.addEventListener("click", 
    increase = () => {
        val += 1;
        innerTxt.innerText = val;
    
});