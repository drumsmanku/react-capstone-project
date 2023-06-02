import React from "react";
import "./BrowseCategories.css";
import avatar from "../Assets/image14.png";
import { useState, useEffect } from "react";
import axios from "axios";

function BrowseCategories() {
  const [catState, setCatState] = useState(null);
  const [movies, setMovies] = useState([]);

  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await axios.get('https://moviesdatabase.p.rapidapi.com/movies', {
        headers: {
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          'X-RapidAPI-Key': 'a885653925mshf86f1757c3987cfp1340fbjsn277741ff7fb4',
        },
        params: {
          genre: genre,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };

  useEffect(() => {
    const categoryData = localStorage.getItem('categoryItems');
    if (categoryData) {
      const finalCatData = JSON.parse(categoryData);
      setCatState(finalCatData);

      const fetchAllMovies = async () => {
        let allMovies = [];
        for (const genre of finalCatData) {
          const moviesByGenre = await fetchMoviesByGenre(genre);
          allMovies = [...allMovies, ...moviesByGenre];
        }
        setMovies(allMovies);
      };

      fetchAllMovies();
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