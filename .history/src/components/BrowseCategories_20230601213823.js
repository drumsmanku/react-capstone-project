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

  const fetchGenreImages = async (genreId) => {
    try {
      const response = await axios.get(
        "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
        {
          headers: {
            "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
          },
          params: {
            q: `genre:${genreId}`,
            // Add other parameters as needed
          },
        }
      );

      // Extract the image URLs from the response data
      const imageUrls = response.data.ITEMS.map((item) => item.image);

      return imageUrls;
    } catch (error) {
      console.error("Error fetching images for genre:", error);
      return [];
    }
  };

  useEffect(() => {
    if (catState) {
      const fetchImages = async () => {
        const images = {};

        for (const genre of catState) {
          images[genre.id] = await fetchGenreImages(genre.id);
        }

        setGenreImages(images);
      };

      fetchImages();
    }
  }, [catState]);

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
                <div style={{height:'40%'}} key={genre.id}>
                  <h2>{genre.name}</h2>
                  <div style={{height:'90%'}}>
                    {genreImages[genre.id] ? (
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
