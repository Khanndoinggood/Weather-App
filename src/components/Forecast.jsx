function Forecast({ data }) {
  return (
    <div className="forecast">
      {data.map((item, index) => (
        <div className="forecast-card" key={index}>
          <p>
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt="weather"
          />

          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
