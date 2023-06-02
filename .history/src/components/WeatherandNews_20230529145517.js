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
  useEffect(()=>{fetchWeatherData();},[]);
  if(error){
    return <p>error</p>
  }
  if(!weatherData){
    <p>Loading</p>
  }
  return (
    <div className="main-container">
      <div className="first-container">
        <div className="details-card">

        </div>
        <div className="weather-card" style={{color:'white'}}>
          {weatherData && (
            <>
              <h3>
                {weatherData.location.name}, {weatherData.location.country}
              </h3>
              <p>Temperature: {weatherData.current.temp_c} °C</p>
              <p>Weather: {weatherData.current.condition.text}</p>
              <p>Pressure: {weatherData.current.pressure_mb} mb</p>
              <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>date: {weatherData.current.humidity}</p>
            </>
          )}
        </div>
      </div>
      <div className="second-container">

      </div>
    </div>
  );
}

export default WeatherandNews