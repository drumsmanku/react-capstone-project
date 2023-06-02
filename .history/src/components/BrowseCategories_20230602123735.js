import React from "react";
import "./BrowseCategories.css";
import avatar from "../Assets/image14.png";
import { useState, useEffect } from "react";
import axios from "axios";

function BrowseCategories() {
  const [catState, setCatState] = useState(null);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: 'YOUR_API_KEY', // Replace with your TMDb API key
          with_genres: genre,
        },
      });

      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      console.error('Error response:', error.response);
      return [];
    }
  };

  useEffect(() => {
    const categoryData = localStorage.getItem('categoryItems');
    if (categoryData) {
      const finalCatData = JSON.parse(categoryData);
      setCatState(finalCatData);

      const fetchMovies = async () => {
        const movies = await Promise.all(finalCatData.map(fetchMoviesByGenre));
        setMoviesByGenre(movies);
      };

      fetchMovies();
    }
  }, []);

  return (
    <div className="container-b">
      <div className="header">
        <h1>Super App</h1>
      </div>
      <div className="body-container">
        <div className="main-elements">
          <h1>Entertainment according to your choice</h1>
          {moviesByGenre.map((movies, index) => (
            <div className="category-elements-b" key={index}>
              <h2>{catState[index]}</h2>
              <div className="movies-by-genre">
                {movies.map((movie) => (
                  <div key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;