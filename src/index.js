import apiServices from "./services/api.services.js";

const APIkey = "5b21ceff975376ccc4e6dd18d0f40388"


const form = document.querySelector("form");

const currentCity = document.querySelector("#cityName")

// TODO: get current weather from city coords

// Convert city name into coordinates so we can use weather API call
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Display city name
    const cityName = event.target.city.value;
    currentCity.innerText = cityName;

    // Display date
    const dateEl = document.querySelector("#date");
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    dateEl.innerText = `${month}/${day}/${year}`;

    let coords = await apiServices.getCoords(cityName);

    let currentWeather = await apiServices.getWeather(coords);

    // Display current conditions
    const tempEl = document.querySelector("#temp");
    tempEl.innerText = `Temp: ${currentWeather.main.temp}\u00B0`;

    const humEl = document.querySelector("#hum");
    humEl.innerText = `Hum: ${currentWeather.main.humidity}%`;

    const windEl = document.querySelector("#wind");
    windEl.innerText = `Wind: ${currentWeather.wind.speed} mph`;

    const img = document.createElement("img");
    let iconCode = currentWeather.weather[0].icon;
    img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const iconEl = document.querySelector("#icon");
    iconEl.appendChild(img)

    let forecast = await apiServices.getForecast(coords);
    console.log(forecast);

});


