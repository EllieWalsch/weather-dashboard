import apiServices from "./services/api.services.js";

const APIkey = "5b21ceff975376ccc4e6dd18d0f40388"


const form = document.querySelector("form");



// TODO: get current weather from city coords

// Convert city name into coordinates so we can use weather API call
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = event.target.city.value;

    let coords = await apiServices.getCoords(cityName);


    let weather = await apiServices.getWeather(coords);
    console.log(weather)
  
});
