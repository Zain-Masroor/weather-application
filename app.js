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

// Home route to fetch weather data
app.get('/', async (req, res) => {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const weatherData = [];

    // Fetch weather data for all major cities
    for (let city of cities) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await axios.get(url);
            weatherData.push(response.data);
        } catch (error) {
            weatherData.push({ name: city, error: 'City not found or API error' });
        }
    }

    // Render the weather data on the index page
    res.render('index', { weatherData });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
