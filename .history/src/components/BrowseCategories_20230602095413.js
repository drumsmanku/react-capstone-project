import React from "react";
import "./BrowseCategories.css";
import avatar from "../Assets/image14.png";
import { useState, useEffect } from "react";
import axios from "axios";

function BrowseCategories() {
  const [catState, setCatState] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const categoryData = localStorage.getItem("categoryItems");
  //   if (categoryData) {
  //     const finalCatData = JSON.parse(categoryData);
  //     setCatState(finalCatData);
  //   }
  // }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/v2/genres",
      headers: {
        "X-RapidAPI-Key": "a885653925mshf86f1757c3987cfp1340fbjsn277741ff7fb4",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    const fetchMovieData = async () => {
      try {
        const response = await axios.request(options);
        const allGenres = response.data;
    
        const categoryItems = JSON.parse(localStorage.getItem('categoryItems'));
        const selectedGenres = allGenres.filter(genre => categoryItems.includes(genre.name));
    
        const fetchMoviesByGenre = async (genreId) => {
          const response = await axios.get(`https://streaming-availability.p.rapidapi.com/v2/search?genre=${genreId}`, {
            headers: {
              'X-RapidAPI-Key': 'a885653925mshf86f1757c3987cfp1340fbjsn277741ff7fb4',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
          });
          return response.data.results; // Assuming the API returns an array of movies in the 'results' property
        };
    
        const moviePromises = selectedGenres.map(genre => fetchMoviesByGenre(genre.id));
        const movieResults = await Promise.all(moviePromises);
        const combinedMovies = movieResults.flat();
        setMovies(combinedMovies);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchMovieData();
  }, []);

  return (
    <div className="container-b">
      <div className="header">
        <h1>Super App</h1>
        <div
          className="avatar"
          style={{
            backgroundImage: `url:${avatar}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "40rem",
          }}
        >
          hey
        </div>
      </div>
      <div className="body-container">
        <div className="main-elements">
          <h1>Entertainment according to your choice</h1>
          <div className="category-elements-b">
            {movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.image_url} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
