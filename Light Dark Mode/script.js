const changeBulb = document.getElementById("bulb");
const body = document.querySelector("body");

let mode = "light"
changeBulb.addEventListener("click", () => {
    if(changeBulb.classList.contains("fa-regular")) {
        changeBulb.classList.remove("fa-regular");
        changeBulb.classList.add("fa-solid");
    } else {
        changeBulb.classList.remove("fa-solid");
        changeBulb.classList.add("fa-regular");
    }

    if(mode === "light")
    {
        mode = "black"
        body.style.backgroundColor = "black"
    }
    else{
        mode = "light"
        body.style.backgroundColor = "white"
    }

    console.log(mode);
});
