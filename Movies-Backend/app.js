// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if (req.url === "/api/movies" && req.method === "GET") {
    const movies = await moviesService.getMovies();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(movies));
  } 
  // Get a movie with specified id
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const movie = await moviesService.getMoviesById(id);
    if (movie) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(movie));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Movie not found" }));
    }
  } 
  // Save movie details
  else if (req.url === "/api/movies" && req.method === "POST") {
    const data = await getRequestData(req);
    const newMovie = JSON.parse(data);
    const movie = await moviesService.saveMovie(newMovie);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(movie));
  } 
  // Update a specific movie
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    const data = await getRequestData(req);
    const updatedMovie = JSON.parse(data);
    const movie = await moviesService.updateMovie(id, updatedMovie);
    if (movie) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(movie));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Movie not found" }));
    }
  } 
  // Delete a specific movie
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    await moviesService.deleteMovieById(id);
    res.writeHead(204);
    res.end();
  } 
  // If no route present capture in the else part
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log("Port already in use");
  }
});
