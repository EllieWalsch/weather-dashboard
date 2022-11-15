
const APIkey = "5b21ceff975376ccc4e6dd18d0f40388";

export default {
    async getCoords(cityName) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q="${cityName}"&limit=1&appid=${APIkey}`)

        return response.json();
    },
};