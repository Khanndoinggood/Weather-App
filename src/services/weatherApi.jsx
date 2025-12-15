const API_KEY = "63a52ee732a3aceb951fea644f6b4e44";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCoords = async (lat, lon) => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return res.json();
};

export const getWeatherByCity = async (city) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.json();
};

export const getForecastByCity = async (city) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.json();
};
