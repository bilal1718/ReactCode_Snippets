import React, { useState, useEffect } from "react";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const apiKey = "867c80f9ffb5e836c8d66abb429338ec";
  const appId = "aa6401ab";

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeData(data.hits);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [apiKey, appId]);

  return (
    <div className="App">
    </div>
  );
}

export default App;

