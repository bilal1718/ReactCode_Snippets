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
return (
    <>
    <>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans"
    rel="stylesheet"
  />
  {recipeData && recipeData.map((recipe,i)=>(
  <div className="recipe-card" key={i}>
   <div
      style={{
        backgroundImage: `url(${recipe.recipe.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        height: 150
      }}
      />
    <div className="recipe-card__body">
      <h1 className="recipe-card__heading">{recipe.recipe.label}</h1>
      <h2 className="recipe-card__subhead">
        Crunchy around the edges, softer in the center, these oatmeal cookies
        feature the nutty taste and nubbly texture of oats.{" "}
      </h2>
      <ul className="recipe-card__nav">
        <li>
          <h3 className="active">Ingredients</h3>
        </li>
        <li>
          <h3>Method</h3>
        </li>
      </ul>
      {recipe.recipe.ingredients.map((ingre)=>(
      <ul className="recipe-card__ingredients">
        <li>{ingre.text}</li>
      </ul>
      ))}
