const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');  // Add CORS middleware

const app = express();
const port = 3000;

// Use CORS to handle cross-origin requests
app.use(cors());

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

// Route to handle the search form submission
app.post('/weather', async (req, res) => {
    const city = req.body.city;

    try {
        // Replace with your OpenWeatherMap API key
        const apiKey = 'dc170de16695f9a1032371cdf0173969';
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        const weatherData = response.data;
        res.render('index', {
            weather: {
                city: weatherData.name,
                temp: weatherData.main.temp,
                description: weatherData.weather[0].description,
                humidity: weatherData.main.humidity,
                wind: weatherData.wind.speed,
            },
            error: null
        });
    } catch (error) {
        console.log(error);
        res.render('index', { weather: null, error: 'Error fetching weather data.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
