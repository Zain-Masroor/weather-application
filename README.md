# Weather App

A simple weather forecasting web application that provides current weather information for any city. Built using Node.js, Express, Axios, and the OpenWeatherMap API.

Features
City Search: Allows users to search for weather data by city name.

Weather Details: Displays the current temperature, weather conditions, humidity, and wind speed.

User-friendly UI: A sleek, responsive design built with modern web technologies.



## Tech Stack

Frontend: EJS (Embedded JavaScript templates), CSS

Backend: Node.js, Express.js

API: OpenWeatherMap API for fetching weather data

HTTP Requests: Axios for API calls


## Prerequisites

Before running this application, ensure that you have the following installed:

Node.js: Download Node.js

npm: Node Package Manager (usually installed with Node.js)




## Installation


1. Clone the Repository

  ```
  git clone https://github.com/yourusername/weather-app.git
  ```

2. Navigate to the Project Directory

    Open a terminal and navigate to the project folder:
  ```
  cd weather-app
  ```

3. Install Dependencies

    Run the following command to install all the required dependencies:
  ```
  npm install express axios cors ejs
  ```


4. Set Up API Key

    Create an account at OpenWeatherMap.


    Once logged in, navigate to the API section and get your API key.

    Replace the placeholder in your code (appid: "YOUR_API_KEY") with your actual API key in the backend code (in app.js).

5. Start the Server

    Run the following command to start the server:

```
  npm start
```

Your app should now be live at http://localhost:3000.




## Folder Structure

/weather-app
  
  ├── /public
  
  │   └── /css
  
  │         └── styles.css      

  │    └── /js
  
  │         └── app.css      
  
  
  ├── /views
  
  │   ├── index.ejs           
  
  │   └── error.ejs         
  
  ├── /node_modules           
  
  ├── app.js                  
  
  ├── package.json            
  
  └── README.md               


public/css/styles.css: Contains the custom styles for the weather app.

views/index.ejs: The homepage that allows users to input the city name.

public/js/app.js: Handles frontend/client side requests.

app.js: The core server file containing routes, API integration, and error handling.



## Running the Application

Launch the server by running npm start in your terminal.

Open a web browser and go to http://localhost:3000 to view the weather application.

Type a city name in the search bar and submit to view the current weather data.




## API Usage

The app retrieves weather data using the OpenWeatherMap API:


API Endpoint: https://api.openweathermap.org/data/2.5/weather

Required Parameters:

q: City name (e.g., "Cairo")

appid: Your OpenWeatherMap API key

units: Metric system (e.g., "metric" for Celsius)

Example of the request URL:

http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=YOUR_API_KEY&units=metric


## Contributing

I welcome contributions to improve the project! To contribute, please fork the repository, create a new branch, and submit a pull request.

Steps to Contribute:

Fork the repository on GitHub.

Clone your fork locally.

Create a new feature branch (git checkout -b feature-name).

Make your changes and commit them (git commit -m "Your message").

Push your changes to your fork (git push origin feature-name).

Submit a pull request to the main repository.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

