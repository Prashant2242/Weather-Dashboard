# WeatherDashboard
🌦️ 
This is a React-based Weather Dashboard that allows users to search for weather information by city and save favorite cities for quick access later.

Live Demo Link of WeatherDashboard Project
https://weather-dashboard-prashant.vercel.app/


🛠 Features

1.Search weather data for any city using the OpenWeatherMap API.

2.View temperature, description, and weather icon.

3.Save cities to a favorite list using localStorage.

4.Responsive design for mobile and desktop.

5.Navigate between home and favorites using React Router.

🚀 Setup Instructions
1. Install Vite (if not installed globally)

npm create vite@latest
# or
npm install vite --save-dev

2. Install Dependencies
npm install

🔧 Running the Application

npm run dev
This will start the development server at http://localhost:5174 (or another available port).

📁 Project Structure

src/
├── App.js                 # Main routing logic
├── App.css                # Styling
├── index.js               # Entry point
└── components/
    ├── WeatherDashboard.jsx  # Home page with input and weather results
    ├── Favorites.jsx         # Displays favorite cities weather
    └── WeatherCard.jsx       # Displays individual weather data


🔄 How the Application Works

🔍 Weather Search (Home Page)
User enters a city name into the input box.

Clicks on Get Weather.


1.Application sends a request to the OpenWeatherMap API.

2.Displays temperature, weather description, and icon.

3.User can click Add to Favorites to save the city in local storage.

⭐ Favorites Page

1.Clicking the Favorites link in the navbar takes the user to the favorites page.

2.All saved favorite cities are retrieved from local storage.

3.Weather data for each city is fetched and displayed using the same WeatherCard component.

🌐 Routing

/ — Home page (weather search)

/favorites — View weather for saved favorite cities

💡 Notes

Ensure you have a working internet connection to fetch live weather data.

CORS errors can occur if OpenWeatherMap blocks requests from certain ports or origins.

1.Write a city on input and press Get Weather button 
![Image](https://github.com/user-attachments/assets/3bbda5f0-75df-474d-b77d-e4fc904c6f80)

2. After Getting the Weather of a city click on Favorities
![Image](https://github.com/user-attachments/assets/18970b89-672b-4719-9111-613cc51822f9)

3.Favorite Cities
![Image](https://github.com/user-attachments/assets/bef6472b-0f9d-469d-963d-8af96bb3acdf)







