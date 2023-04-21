import { useEffect } from "react";

// const API_URL = "http://www.omdbapi.com?apikey=12dc7cfc";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=12dc7cfc";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log("Data from APi--", data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <h1> App </h1>;
};

export default App;
