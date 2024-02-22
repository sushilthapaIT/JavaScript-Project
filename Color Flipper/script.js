const color = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const btn = document.querySelector("#btn");
const body = document.querySelector("body");



btn.addEventListener("click", changeMode = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * color.length);

    body.style.backgroundColor = color[randomNumber];
})


