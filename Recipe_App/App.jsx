import React, { useState, useEffect } from "react";
import "./App.css";

function RecipeCard({ recipe, index }) {
  const [ingredientOn, setIngredientOn] = useState(true);
  const [infoOn, setInfoOn] = useState(false);
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [numTagsDisplayed, setNumTagsDisplayed] = useState(5);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  const getContrastColor = (color) => {
    const rgb = color.match(/\d+/g);
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    return brightness >= 128 ? "black" : "white";
  };
const toggleTags = () => {
    setShowMoreTags((prev)=>!prev);
    if (showMoreTags) {
      setNumTagsDisplayed((prev) => prev + 5);
    }
  };

  const getState = () => {
    setInfoOn((prev) => !prev);
    setIngredientOn((prev) => !prev);
  };

  return (
    <div className="recipe-card" key={index}>
      <div
        style={{
          backgroundImage: `url(${recipe.recipe.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          height: 150,
        }}
      />
      <div className="recipe-card__body" key={index}>
        <h1 className="recipe-card__heading">{recipe.recipe.label}</h1>
        <h2 className="recipe-card__subhead">
          {recipe.recipe.healthLabels.slice(0, numTagsDisplayed).map((label) => (
            <span
              className={`badge`}
              style={{
                backgroundColor: getRandomColor(),
                color: getContrastColor(getRandomColor()),
              }}
            >
              {label}
            </span>
          ))}
          {recipe.recipe.healthLabels.length > numTagsDisplayed && (
            <span className="badge" onClick={toggleTags}>
              ...
            </span>
          )}
        </h2>
        <ul className="recipe-card__nav">
          <li onClick={getState}>
            <h3 className={`${ingredientOn ? "active" : ""}`}>Ingredients</h3>
          </li>
          <li onClick={getState}>
            <h3 className={`${infoOn ? "active" : ""}`}>Information</h3>
          </li>
        </ul>
        <ul className="recipe-card__ingredients">
          {ingredientOn &&
            recipe.recipe.ingredients.map((ingre, i) => (
              <li key={i} className="li">
                {ingre.text}
              </li>
            ))}
        </ul>

        {infoOn && (
          <ul className="recipe-card__ingredients">
            <li>
              Calories : <span>{recipe.recipe.calories}</span>
            </li>
            <li>
              Meal Type : <span>{recipe.recipe.mealType}</span>
            </li>
            <li>
              Cautions : <span>{recipe.recipe.cautions}</span>
            </li>
            <li>
              Cuisine Type : <span>{recipe.recipe.cuisineType}</span>
            </li>
            <li>
              Source : <span>{recipe.recipe.source}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
