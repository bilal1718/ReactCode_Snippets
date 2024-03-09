
import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const apiKey = `d3b64dbcb796fa06aed6022a6af9bbd6`;
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  }, [city]);
return (
    <div className="App">
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      {city && weatherData.name && (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>Feels like: {weatherData.main.feels_like}°C</h2>
        </div>
      )}
    </div>
  );
}
