let index = 0;

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");

prev.addEventListener("click", () => {
    index -= 1;

    let images = document.querySelector("img");
    let dots = document.querySelector("dot");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    console.log("previous clicked.");
})

next.addEventListener("click", () => {
    index += 1;
    console.log("next clicked");
})