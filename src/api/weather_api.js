const API_KEY = `280bbe4efdf3d2ae9a510b56ed9bdcf3`;
const API_URL = `https://api.openweathermap.org/data/2.5/forecast`;

class WeatherApi {
    static getWeather(city) {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}?q=${city},US&appid=${API_KEY}`
            fetch(`${url}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (cars) {
                    resolve(cars);
                });
        });
    }
}

export default WeatherApi;