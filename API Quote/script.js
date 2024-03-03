const URL = "https://api.quotable.io/random";

const getRandomQuotes = async () => {
    console.log("getting data...")
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        console.log(data.author);
        console.log(data.content);
        console.log("data received...");
    } catch (error) {
        console.error("Error fetching random quote:", error);
    }
}

getRandomQuotes();
