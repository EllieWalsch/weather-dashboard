import apiServices from "./services/api.services.js";

const APIkey = "5b21ceff975376ccc4e6dd18d0f40388"


const form = document.querySelector("form");

const currentCity = document.querySelector("#cityName")

// TODO: get current weather from city coords

// Convert city name into coordinates so we can use weather API call
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = event.target.city.value;
    currentCity.innerText = cityName;

    let coords = await apiServices.getCoords(cityName);


    let currentWeather = await apiServices.getWeather(coords);

    console.log(currentWeather);

    const tempEl = document.querySelector("#temp");
    tempEl.innerText = `Temp: ${currentWeather.main.temp}\u00B0`;

    const humEl = document.querySelector("#hum");
    humEl.innerText = `Hum: ${currentWeather.main.humidity}%`;

});


