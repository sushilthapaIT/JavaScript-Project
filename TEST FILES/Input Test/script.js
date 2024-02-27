// function testing(){
//     var input1 = document.getElementById("testing");
//     var input2 = document.getElementById("testing1");
//     var output = input1.value * input2.value;

//     var output1 = document.getElementById("output1")
//     output1.innerText = `<p style="color:red;">${output}</p>`


//     console.log("Hello",input1)
// }



// Program to display the weather information for the given city

// vairiable declerations
const cityInputContainer = document.getElementById("cityInput");
const weatherInfoContainer = document.getElementById("weatherInfo");

// variable for api request
const apiKey = "Your API KEY";
const apiEndpoint = 'https://api.weatherapi.com/v1/current.json';

// function for constructing full api
function constructUrl(city){
    return `${apiEndpoint}?key=${apiKey}&q=${city}`;
}

function clearWeatherInfo() {
    weatherInfoContainer.innerHTML = '';
}

// function for handling the error and displaying the error message
function handleError(message){
    weatherInfoContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}

// closures in js
function logCity(city){
    return function(){
        console.log(`The city is: ${city}`);
    };
};


// Getting input from the user and validating it
function getWeather(){
    const city = cityInputContainer.value.trim();
    if(!city){
        alert("Please enter a city");
        return;
    }

    clearWeatherInfo();
    // loging the trimmed value of the city, not necessary but for the purpose of assignment
    const logCityCallback = logCity(city); // logCity(city) returns the function, so logCityCallback is the function
    fetchAndDisplayWeather(city, logCityCallback);

}

// use of promises
function fetchWeatherData(city){
    return new Promise(async (resolve, reject) => {
        try {
            const apiUrl = constructUrl(city);
            const response = await fetch(apiUrl);
            const responseData = await response.json();
            resolve(responseData);
        } catch (error) {
            reject(error);
        }
    });
}

// calling callback after fetching weather data
function fetchAndDisplayWeather(city, callback){
    fetchWeatherData(city)
        .then((data)=>{
            displayWeatherInfo(data);
            callback();
        })
        .catch((error)=>{
            handleError(error);
            callback();
        })
}

//Displaying the weather
function displayWeatherInfo(weatherData) {
    const  {location, current}  = weatherData;
    try{
      const info = `
      <h2>Weather in ${location.name}, ${location.country}</h2>
      <p>Temperature: ${current.temp_c}°C</p>
      <p>Condition: ${current.condition.text}</p>
      <p>Wind Speed: ${current.wind_kph} kph</p>
    `;
    weatherInfo.innerHTML = info;
    }catch(error){
        handleError("The city does not exist");
    };
  };