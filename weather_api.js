
import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const apiKey = `d3b64dbcb796fa06aed6022a6af9bbd6`;
