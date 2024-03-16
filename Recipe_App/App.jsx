import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = "867c80f9ffb5e836c8d66abb429338ec";
  const appId = "aa6401ab";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      setLoading(true);
      setError(null);
      fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRecipeData(data.hits);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe data:", error);
          setError("Error fetching recipe data. Please try again later.");
          setLoading(false);
        });
    }
  }, [apiKey, appId, searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue); // Set the search term for fetching data
  }
