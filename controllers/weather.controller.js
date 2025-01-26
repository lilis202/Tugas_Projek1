const weatherAPI = require('../config/open-api');
const { parseWeather } = require('../models/weather.models');

const weather = async (req, res) => {
    const query = req.query.q || 'London'; // Default to London if no query

    try {
        const response = await weatherAPI.get('/current.json', {
            params: { q: query }
        });

        const weatherData = parseWeather(response.data);
        res.status(200).json(weatherData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Error fetching weather data', 
            error: error.message 
        });
    }
};

module.exports = {
    weather
};