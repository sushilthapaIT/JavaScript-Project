const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getData = async() => {
    try{
        console.log("getting data...")
        let response = await fetch(URL);
        let data =  await response.json();
        console.log(data);
    }
    catch(err){
        console.log("We got problem",err)
    }
}