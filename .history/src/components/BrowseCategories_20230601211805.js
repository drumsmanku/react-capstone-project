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
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const categoryData = localStorage.getItem("categoryItems");
    if (categoryData) {
      const finalCatData = JSON.parse(categoryData);
      setCatState(finalCatData);
    }
  }, []);
  

  
  console.log(movies)
  useEffect(()=>{
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
      };
      const fetchMovies = async()=>{
          await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${catState}&year=2020`, options)
              .then(response => response.json())
              .then(response => setMovies(response.results.splice(4,4)))
              .catch(err => console.error(err));
      }
      fetchMovies();
  },[])

  
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
          <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"20vw", height:"20vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
