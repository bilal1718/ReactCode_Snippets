import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = "867c80f9ffb5e836c8d66abb429338ec";
  const appId = "aa6401ab";

  useEffect(() => {

    fetch(`https://api.edamam.com/search?q=paratha&app_id=${appId}&app_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeData(data.hits);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [query, apiKey, appId]);
