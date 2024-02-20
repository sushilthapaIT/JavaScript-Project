const myBtn = document.querySelector("#btn");
let body = document.querySelector("body");
let currMode = "light";

myBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black"; // access through body
        body.classList.add("dark"); // adding class id into body
        body.classList.remove("light"); //removing light class so another class can be added
    }
    else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark"); 
    }
    console.log(currMode);
});
