const upperContent = document.querySelector(".v-input");
const cont = document.querySelector(".content");
const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    const upperContentVl = upperContent.value;
    cont.innerHTML = upperContentVl;
    upperContent.value = "";
})