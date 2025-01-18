console.log("App Loaded");

async function fetchWeather(city) {
    document.getElementById('weatherCard').classList.add('hidden');
    document.getElementById('errorMessage').classList.add('hidden');
    document.getElementById('cityNameDisplay').textContent = 'Loading...';
    
    try {
        const response = await fetch(`/weather/${city}`);
        const data = await response.json();
        
        // If the response contains an error (city not found, etc.)
        if (data.error) {
            displayError(data.error);
            return;
        }

        // Otherwise, display the weather data
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError("Error fetching weather data.");
    }
}

function displayWeather(data) {
    document.getElementById('weatherCard').classList.remove('hidden');
    document.getElementById('cityNameDisplay').textContent = data.name;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('weatherDescription').textContent = data.weather[0].description;
}

function displayError(message) {
    document.getElementById('errorMessage').classList.remove('hidden');
    document.getElementById('errorMessage').textContent = message;
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityName').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        displayError("Please enter a valid city name.");
    }
});
