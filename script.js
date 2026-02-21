const apiKey = "3ad629da8b3feec485ffc072cb25ebc1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°F";
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = Math.round(data.wind.speed) + "mph";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "Images/clouds.png";
    }
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
