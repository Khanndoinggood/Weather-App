function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
      />

      <h2>Today</h2>
<h1>{data.name}</h1>
<p>Temperature: {Math.round(data.main.temp)}°C</p>
<p>{data.weather[0].description}</p>

    </div>
  );
}

export default WeatherCard;
