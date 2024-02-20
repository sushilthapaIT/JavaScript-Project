// function alert() {}

// let form = 

// const func =  add = () => {
//     const input = document.getElementById("input1");

//     const output = document.getElementById("output");

//     output.innerHTML += `<div id="flex"> 
//                             <p id="green">You added ${input.value} in your shopping list</p> 
//                             <button id="lightyellow">Edit</button>
//                             <button id="red">Delete</button>
//                         </div>`;

//     output.value = "" ;
// }



let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let data = {};

form.addEventListener("submit", (e) => { 
    // debugger;
    e.preventDefault(); //prevent from reloading the page

    console.log("button clicked")
    formValidation();
})


let formValidation = () => {
    if (input.value === "") {
        // msg.innerHTML =`items cannot be null`
        alert("Oops!!! Empty field \nitems cannot be null");
        console.log("failure");
    }
    else{
        // msg.innerHTML = ""
        // console.log("Success");
        acceptData();
    }


}


let acceptData = () => {
    // data["text"] = input.value;
    // console.log(data);
    createPost();
}


let createPost = () => {
    msg.innerHTML += `
    <div>
      <p>${input.value}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>      </span>
    </div>
    `;
    input.value = "";
};


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
    console.log(e);
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};