const url = "https://api.quotable.io/random";

const author = document.querySelector(".author");
const quote  = document.querySelector(".content");
const btn    = document.querySelector(".button");

let getData = async () =>  {
    try{
        let response = await fetch(url);
        let data = await response.json();
        author.innerHTML = `By-${data.author}`;
        quote.innerHTML = `"${data.content}"`;
    }
    catch(err){
        console.log("We got error", err);
    }
};

btn.addEventListener("click", getData);