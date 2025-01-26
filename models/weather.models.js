const parseWeather = (weatherData) => {
    return {
        location: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        temperature: weatherData.current.temp_c,
        condition: weatherData.current.condition.text,
        humidity: weatherData.current.humidity,
        wind_speed: weatherData.current.wind_kph,
        wind_direction: weatherData.current.wind_dir,
        pressure: weatherData.current.pressure_mb,
        feels_like: weatherData.current.feelslike_c,
        last_updated: weatherData.current.last_updated
    };
};

module.exports = {
    parseWeather
};