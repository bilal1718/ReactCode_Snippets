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
