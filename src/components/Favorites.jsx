import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

const Favorites = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    const fetchFavoritesWeather = async () => {
      const cities = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteCities(cities);
      
      const API_KEY = "5acc1683650652bab831ecf7d57fd397";
      const weatherData = await Promise.all(
        cities.map(async (city) => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            if (!response.ok) throw new Error();
            return await response.json();
          } catch {
            return null;
          }
        })
      );
      setWeatherList(weatherData.filter(Boolean));
    };
    fetchFavoritesWeather();
  }, []);

  return (
    <div className="favorites">
      <div className='heading'>
      <h1>Favorite Cities</h1>
      </div>
     
      {weatherList.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        weatherList.map((data) => <WeatherCard key={data.id} data={data} />)
      )}
    </div>
  );
};

export default Favorites;
