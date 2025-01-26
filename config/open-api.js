require('dotenv').config();
const axios = require('axios');

const weatherAPI = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: process.env.API_KEY
    }
});

module.exports = weatherAPI;