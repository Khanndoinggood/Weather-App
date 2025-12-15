import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const cities = [
    "Phnom Penh",
    "Singapore",
    "Tokyo",
    "Seoul",
    "New York",
    "London",
    "Paris",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        list="city-list"
        placeholder="Enter or select a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <datalist id="city-list">
        {cities.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </form>
  );
}

export default SearchBar;
