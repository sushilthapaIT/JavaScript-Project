




const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherInfo = document.querySelector(".weather-info");

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);
        if(response.status == 404)
        {
            document.querySelector(".error").style.display = "block";        
            document.querySelector(".weather").style.display = "none";
        }

        else
        {

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";

            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src = "images/clouds.png";
                weatherInfo.innerHTML = "Cloudy";
            }
            else if(data.weather[0].main =="Clear")
            {
                weatherIcon.src = "images/clear.png";
                weatherInfo.innerHTML = "Clear";
            }
            else if(data.weather[0].main =="Rain")
            {
                weatherIcon.src = "images/rain.png";
                weatherInfo.innerHTML = "Rainy";
            }
            else if(data.weather[0].main == "Drizzle")
            {
                weatherIcon.src = "images/drizzle.png";
                weatherInfo.innerHTML = "Drizzle";
            }
            else if(data.weather[0].main == "Mist")
            {
                weatherIcon.src = "images/mist.png";
                weatherInfo.innerHTML = "Mist";
            }
        
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    
    }


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

