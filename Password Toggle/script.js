
const eye = document.querySelector("#eye");

// eye.addEventListener("click", () => {
//     eye.classList = "fa-regular fa-eye-slash";

//     if(eye.classList === "fa-regular fa-eye-slash"){
//         eye.remove.classList === "fa-regular fa-eye"
//     }

// })

const input = document.querySelector("#input");



eye.addEventListener("click", () => {
    // eye.classList = "fa-regular fa-eye-slash";

    // if(eye.classList === "fa-regular fa-eye-slash"){
    //     eye.remove.classList === "fa-regular fa-eye"
    // }

    if (input.type === "password"){
        input.type = "text"
    }
    else
    {
        input.type = "password"
    }

})
