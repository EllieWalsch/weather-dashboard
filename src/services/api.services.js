
const APIkey = "5b21ceff975376ccc4e6dd18d0f40388";



export default {
    async getCoords(cityName) {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q="${cityName}"&limit=1&appid=${APIkey}`)

    
        // return response.json();
        let coords = await response.json();
        return coords;

    },
    async getWeather(coords) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=${APIkey}&units=imperial`)

        return response.json();
    },
    async getForecast(coords) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=${APIkey}&units=imperial`)
    
        return response.json();
    }
};
