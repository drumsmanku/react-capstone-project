import React from "react";
import "./BrowseCategories.css";
import avatar from "../Assets/image14.png";
import { useState, useEffect } from "react";
import axios from "axios";

function BrowseCategories() {
  const [catState, setCatState] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genreImages, setGenreImages] = useState({});

  useEffect(() => {
    const categoryData = localStorage.getItem("categoryItems");
    if (categoryData) {
      const finalCatData = JSON.parse(categoryData);
      setCatState(finalCatData);
    }
  }, []);

  const TMDB_API_KEY = "28526ec432934bd8b9d4c9ef7612e0a8";
  const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  const fetchGenreImages = async (genreId) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: TMDB_API_KEY,
            with_genres: genreId,
            // Add other parameters as needed
          },
        }
      );

      // Extract the image URLs from the response data
      const imageUrls = response.data.results.map(
        (movie) => TMDB_BASE_IMAGE_URL + movie.poster_path
      );

      console.log("Image URLs for genre", genreId, ":", imageUrls);

      return imageUrls;
    } catch (error) {
      console.error("Error fetching images for genre:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );
  
        const genres = response.data.genres;
        const categoryData = localStorage.getItem("categoryItems");
        if (categoryData) {
          const finalCatData = JSON.parse(categoryData);
          const filteredGenres = genres.filter((genre) =>
            finalCatData.includes(genre.id)
          );
          setCatState(filteredGenres);
  
          // Fetch images for each genre
          const genreImagePromises = filteredGenres.map((genre) =>
            fetchGenreImages(genre.id)
              .then((imageUrls) => ({ [genre.id]: imageUrls }))
          );
          const genreImageResults = await Promise.all(genreImagePromises);
          const genreImageMap = Object.assign({}, ...genreImageResults);
          setGenreImages(genreImageMap);
        } else {
          setCatState(genres);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
  
    fetchGenres();
  }, []);
  
  

  console.log("Genre images state:", genreImages);

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
            {catState &&
              catState.map((genre) => (
                <div style={{ height: "30%" }} key={genre.id}>
                  <h2>{genre.name}</h2>
                  <div style={{ height: "90%", display:'flex' }}>
                    {genreImages[genre.id] &&
                    genreImages[genre.id].length > 0 ? (
                      genreImages[genre.id].map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`${genre.name} movie`}
                        />
                      ))
                    ) : (
                      <p>Loading images...</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
