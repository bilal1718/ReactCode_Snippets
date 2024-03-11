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
    <div className="App">
      {/* <input
        type="text"
        placeholder="Enter the item for recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> */}
      {/* <h1>{query}</h1>
      {recipeData.map((recipe, index) => (
        <div>
        <p key={index}>{recipe.recipe.label}</p>
        <img src={recipe.recipe.image} />
        </div>
      ))} */}
      <>
      
  <div className="recipe-container">
    <input type="checkbox" id="turn" />
    <div className="recipe-box">
      <div className="recipe-card">
        <div className="recipe-front">
          <label htmlFor="turn">The Process</label>
          <div className="content">
            <h1>Pasta with Pesto and Tomatoes</h1>
            <div className="description">
              <p>
                This quick and delicious pasta dish is the perfect way to use up
                a summer bounty of basil and tomatoes!{" "}
              </p>
              <p className="tip">
                Don't have a green thumb? Never fear! You can knock out this
                classic pasta dish in no time with a jar of prepared pesto
                sauce.{" "}
              </p>
            </div>
            <ul className="details">
              <li>
                Servings <span>4</span>
              </li>
              <li>
                Dificult <span>Easy</span>
              </li>
              <li>
                Prep Time <span>5 min</span>
              </li>
              <li>
                Cook Time <span>25 min</span>
              </li>
              {/*<li>Total Time <span>30 min</span></li>*/}
            </ul>
            <h2>The Ingredients</h2>
            <ul className="ingredients">
            {recipeData.hits && recipeData.hits.map((recipe)=>{
                {recipe.recipe.ingredients && recipe.recipe.ingredients.map((ingredient)=>{
                  <li>
                <span>{ingredient.quantity} {ingredient.measure}</span>
                <input type="checkbox" id="ing-1" />
                <label htmlFor="ing-1">{ingredient.text}</label>
              </li>

                })}
              })}

              {/* // <li>
              //   <span>2 cups</span>
              //   <input type="checkbox" id="ing-2" />
              //   <label htmlFor="ing-2">
              //     fresh basil leaves, <em>plus 4-8 leaves for garnish</em>
              //   </label>
              // </li>
              // <li>
              //   <span>2</span>
              //   <input type="checkbox" id="ing-3" />
              //   <label htmlFor="ing-3">cloves garlic</label>
              // </li>
              // <li>
              //   <span>2 tbsp</span>
              //   <input type="checkbox" id="ing-4" />
              //   <label htmlFor="ing-4">
              //     pine nuts <em>or blanched almonds</em>
              //   </label>
              // </li>
              // <li>
              //   <span>
              //     <sup>1</sup>/<sub>2</sub> cup
              //   </span>
              //   <input type="checkbox" id="ing-5" />
              //   <label htmlFor="ing-5">
              //     olive oil, <em>plus 1/2 tsp for the skillet</em>
              //   </label>
              // </li>
              // <li>
              //   <span>
              //     <sup>1</sup>/<sub>2</sub> cup
              //   </span>
              //   <input type="checkbox" id="ing-6" />
              //   <label htmlFor="ing-6">
              //     grated Parmesan cheese, <em>plus 2 tbsp for garnish</em>
              //   </label>
              // </li>
              // <li>
              //   <span>
              //     <sup>1</sup>/<sub>8</sub> tsp
              //   </span>
              //   <input type="checkbox" id="ing-7" />
              //   <label htmlFor="ing-7">salt</label>
              // </li>
              // <li>
              //   <span>1 pint</span>
              //   <input type="checkbox" id="ing-8" />
              //   <label htmlFor="ing-8">cherry tomatoes</label>
              // </li> */}
              {/*<li><span>1 tsp</span><input type="checkbox" id="ing-9"><label for="ing-9">olive oil</label></li>*/}
            </ul>
            <p className="tip">
              Variation: Got no time, or no fresh basil? <span />
              Use a 6 ounce jar of prepared pesto instead.
            </p>
          </div>
        </div>
        {/* BACK */}
        <div className="recipe-back">
          <label htmlFor="turn">The Ingredients</label>
          <figure>
            <img
              src=""
              alt="tomato halves surrounded by basil leaves and peppercorns."
            />
          </figure>
          <div className="content">
            <h2>The Process</h2>
            <input type="checkbox" id="make-pesto" />
            <ol className="instructions">
              <li>
                Bring 4 quarts of water to a rolling boil in a large pot. Salt
                the water generously and add the pasta.{" "}
              </li>
              <li>
                While the pasta cooks,{" "}
                <label htmlFor="make-pesto">
                  make the pesto <span />
                </label>
                .
                <ul>
                  <li>Remove stems from basil leaves.</li>
                  <li>
                    Put the basil, garlic, and pine nuts or almonds into the
                    bowl of a food processor and pulse it a few times to chop
                    them up.
                  </li>
                  <li>
                    Then, turn the food processor on and <strong>slowly</strong>{" "}
                    pour the olive oil through the feeder tube to blend with the
                    chopped herbs and nuts.{" "}
                  </li>
                  <li>
                    Process until all ingredients are fully blended, stopping
                    the food processor to scrape down the sides occasionally to
                    get it all mixed.{" "}
                  </li>
                  <li>
                    Turn off the food processor, and add the salt and Parmesean,
                    then pulse a few times to blend.
                  </li>
                </ul>
              </li>
              <li>Heat a large skillet over medium heat. </li>
              <li>
                Add the <sup>1</sup>/<sub>2</sub> tsp. olive oil to the heated
                skillet.
              </li>
              <li>
                Add the cherry tomatoes to the skillet and let them blister,
                stirring occasionally and gently so they don't burst.{" "}
              </li>
              <li>Remove tomatoes from the pan and set aside. </li>
              <li>
                Drain the pasta, reserving <sup>1</sup>/<sub>4</sub> cup of the
                cooking water.
              </li>
              <li>Return the pasta to the pot</li>
              <li>
                Add the reserved cooking water and pesto to the pasta and stir
                to mix
              </li>
              <li>Plate the pasta and add 6-8 tomatoes to each plate</li>
              <li>
                Garnish with reserved basil leaves and Parmesean and serve.
              </li>
            </ol>
            <div className="buon-appetito">Buon Appetito!</div>
          </div>
        </div>
      </div>
      {/* card */}
    </div>
    {/* box */}
  
  </div>
  {/* container */}
</>


    </div>
  );
}

export default App;
