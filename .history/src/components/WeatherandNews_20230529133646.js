import React, {useState,useEffect} from 'react';
import './WeatherandNews.css'
import axios from 'axios';

function WeatherandNews() {
  const [weatherData, setWeatherData] =useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData=async()=>{
    const API_KEY='1baf99a2e9b14d789df73424232905';
    const city='Bangalore';
    const url=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    try{
      const response=await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    }
    catch(error){
      setError("error fetching weather data");
    }
  }
  return (
    <div className='main-container'>

    </div>
  )
}

export default WeatherandNews