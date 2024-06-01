// Import the axios library
const axios = require('axios');

const API_URL = 'http://localhost:5000/api/movies';

const getMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

const getMoviesById = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${movieId}:`, error);
    throw error;
  }
}

const saveMovie = async (newMovie) => {
  try {
    const response = await axios.post(API_URL, newMovie);
    return response.data;
  } catch (error) {
    console.error('Error saving movie:', error);
    throw error;
  }
}

const updateMovie = async (movieId, updateData) => {
  try {
    const response = await axios.put(`${API_URL}/${movieId}`, updateData);
    return response.data;
  } catch (error) {
    console.error(`Error updating movie with ID ${movieId}:`, error);
    throw error;
  }
}

const deleteMovieById = async (movieId) => {
  try {
    await axios.delete(`${API_URL}/${movieId}`);
  } catch (error) {
    console.error(`Error deleting movie with ID ${movieId}:`, error);
    throw error;
  }
}

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
