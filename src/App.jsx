import { useEffect, useState } from "react";
import {
  getWeatherByCoords,
  getWeatherByCity,
  getForecastByCity,
} from "./services/weatherApi";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const weatherData = await getWeatherByCoords(
        pos.coords.latitude,
        pos.coords.longitude
      );

      const forecastData = await getForecastByCity(weatherData.name);

      const dailyForecast = forecastData.list
        .filter((_, i) => i % 8 === 0)
        .slice(1, 5);

      setWeather(weatherData);
      setForecast(dailyForecast);
    });
  }, []);

  const searchCity = async (city) => {
    const weatherData = await getWeatherByCity(city);
    const forecastData = await getForecastByCity(city);

    const dailyForecast = forecastData.list
      .filter((_, i) => i % 8 === 0)
      .slice(1, 5);

    setWeather(weatherData);
    setForecast(dailyForecast);
  };

  return (
    <div className="page">
      {/* 🎥 Background video */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <SearchBar onSearch={searchCity} />

      <div className="weather-wrapper">
        {weather && <WeatherCard data={weather} />}
        {forecast.length > 0 && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
