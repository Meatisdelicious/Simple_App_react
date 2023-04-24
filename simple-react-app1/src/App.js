import { useEffect } from "react";
import "./style/App.css";
import SearchIcon from "./images/search.svg";

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
  const searchMovies = async (title) => {
    // to get a response from the API
    const response = await fetch(`${API_URL}&s=${title}`);
    // To get the data from the response
    const data = await response.json();

    console.log("Data from APi--", data.Search);
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
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie1.Type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
