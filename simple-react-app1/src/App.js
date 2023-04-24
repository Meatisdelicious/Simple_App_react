import { useEffect, useState } from "react";
import "./style/App.css";
import SearchIcon from "./images/search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=12dc7cfc";

const movie1 = {
  Title: "The Amazing Spiderman 2 Webb Cut",
  Year: "2021",
  imdbID: "tt18351128",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
};

const App = () => {
  // to display the entire list of movies
  const [movies, setMovies] = useState([]);
  // to make the search work
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    // to get a response from the API
    const response = await fetch(`${API_URL}&s=${title}`);
    // To get the data from the response
    const data = await response.json();

    // console.log("Data from APi--", data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search  for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
