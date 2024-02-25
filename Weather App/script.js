


const apiKey = "4eaadd3e6d8b7fadae1d69e277294842";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nepal";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log(response);

    document.querySelector(".city").innerHTML = data.name;
}


checkWeather();