import React, {useState,useEffect} from 'react';
import './WeatherandNews.css'
import axios from 'axios';
import img from '../Assets/image14.png'

function WeatherandNews() {
  const [weatherData, setWeatherData] =useState(null);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [myData, setMyData] = useState(null);
  const [catData, setCatData]=useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('RegistrationFormData');
    const categoryData=localStorage.getItem('categoryItems');

    if (storedData || categoryData) {
      const parsedData = JSON.parse(storedData);
      setMyData(parsedData);
      const catFinalData=JSON.parse(categoryData);
      setCatData(catFinalData);
    }
  }, []);
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  if(error){
    return <p>error</p>
  }
  if(!weatherData){
    <p>Loading</p>
  }
  return (
    <div className="main-container-w ">
      <div className="first-container-w">
        <div className="details-card-w">
          <div className="img-w">
            <img src={img} alt="" height={350}/>
          </div>
          <div className="rest-w" style={{width:'50%', color:'white', fontFamily:'DM Sans'}}>
            {myData&&<p style={{fontSize:'1.6rem'}}>{myData.Name}</p>}
            {myData&&<p style={{fontSize:'1.6rem'}}>{myData.Email}</p>}
            {myData&&<h1>{myData.UserName}</h1>}
            <div className="cats-w">
              {catData&& catData.map((cat,index)=>(
                <button style={{backgroundColor:'#9F94FF', border:'none', borderRadius:'2rem', width:'5rem'}} key={index}>{cat}</button>
              ))}
              
            </div>
          </div>
        </div>
        <div className="weather-card-w" style={{color:'white'}}>
          
          {weatherData && (
            <>
              
            </>
          )}
        </div>
      </div>
      <div className="second-container-w">
         <div className="news-card-w">
            hey
         </div>     
      </div>
    </div>
  );
}

export default WeatherandNews