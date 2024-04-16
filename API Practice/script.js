const URL = "https://api.quotable.io/random"

async function nae(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(`error ${error}`)
    }
}

nae()

