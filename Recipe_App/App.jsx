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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipeData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(recipeData.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
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
    setSearchTerm(inputValue);
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="recipe-container">
        {currentPosts.length > 0 ?
          currentPosts.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          )) :
          <p>Search for any type of recipe</p>
        }
        {/* Pagination buttons */}
        <div className="pagination">
          <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(recipeData.length / postsPerPage)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
