import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "5acc1683650652bab831ecf7d57fd397";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(city)) {
      favorites.push(city);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div className="dashboard">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div>
          <WeatherCard data={weatherData} />
          <button className="favorite-btn" onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;



