import axios from 'axios';

import './SubmitSuccess.css'
import requests from './Requests';
import instance from './Axios';
import { useState,useEffect } from 'react';


function Row() {

  const [movies, setMovies]=useState([]);
  const getPosterUrl=(posterUrl)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterUrl}`
  }

  useEffect(()=>{
     const fetchImageData= async () =>{
      const response=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6bf1dd2c1c01b0760e553d848ab21e5c&with_genres=35');
      setMovies(response.data.results);
     }
     fetchImageData();
     
  },[])
  return(
    <>
      <div style={{display:'flex'}}>
        {movies.map((movie, idx)=>(
          <div key={idx} style={{display:'flex', flexDirection:'column'}} className="each_movie">
            {movie.original_title}
            <img key={idx} src={getPosterUrl(movie.poster_path)} alt="not found" />
          </div>
        ))}
      </div>


    </>
  )
}

export default Row;