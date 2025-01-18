const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// List of major cities
const cities = [
    'New York', 'London', 'Paris', 'Tokyo', 'Dubai',
    'Sydney', 'Berlin', 'Los Angeles', 'Mumbai', 'Toronto'
];

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Home route to fetch weather data for major cities
app.get('/', async (req, res) => {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const weatherData = [];

    for (let city of cities) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await axios.get(url);
            weatherData.push(response.data);
        } catch (error) {
            weatherData.push({ name: city, error: 'City not found or API error' });
        }
    }

    res.render('index', { weatherData });
});

// New route to handle weather search by city name
app.get('/weather/:city', async (req, res) => {
    const cityName = req.params.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);  // Send the weather data as JSON
    } catch (error) {
        res.json({ error: 'City not found or API error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
