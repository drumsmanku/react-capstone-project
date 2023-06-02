import React, { useState, useEffect } from "react";
import "./WeatherandNews.css";
import axios from "axios";
import img from "../Assets/image14.png";
import img1 from "../Assets/cloud.png";
import img2 from "../Assets/pressure.png";
import img3 from "../Assets/wind.png";
import img4 from "../Assets/Group.png";
import up from "../Assets/up.png";
import down from "../Assets/down.png";
import { Navigate, useNavigate } from "react-router-dom";


function WeatherandNews() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [myData, setMyData] = useState(null);
  const [catData, setCatData] = useState(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [notes, setNotes] = useState("");
  const [hoursInput, setHoursInput] = useState(0);
  const [minuteInput, setMinuteInput] = useState(0);
  const [secondsInput, setSecondsInput] = useState(0);
  const [hoursTimerInput, setHoursTimerInput] = useState(hoursInput);
  const [minuteTimerInput, setMinuteTimerInput] = useState(minuteInput);
  const [secondsTimerInput, setSecondsTimerInput] = useState(secondsInput);

  const navigate=new Navigate()

  useEffect(() => {
    const storedData = localStorage.getItem("RegistrationFormData");
    const categoryData = localStorage.getItem("categoryItems");

    if (storedData || categoryData) {
      const parsedData = JSON.parse(storedData);
      setMyData(parsedData);
      const catFinalData = JSON.parse(categoryData);
      setCatData(catFinalData);
    }
  }, []);
  const fetchWeatherData = async () => {
    const API_KEY = "1baf99a2e9b14d789df73424232905";
    const city = "Bangalore";
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError("error fetching weather data");
    }
  };
  const fetchNewsData = async () => {
    const API_KEY_NEWS = "ab208cb5f7d3413e98939478bd0b84a0";
    const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY_NEWS}`;
    try {
      const newsData = await axios.get(url);
      setNewsData(newsData.data);
      setError(null);
      const newIndex = Math.floor(
        Math.random() * newsData.data.articles.length
      );
      setCurrentNewsIndex(newIndex);
    } catch (error) {
      setError("error fetching the news data");
    }
  };
  useEffect(() => {
    fetchNewsData();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  if (error) {
    return <p>error</p>;
  }
  if (!weatherData || !newsData) {
    <p>Loading</p>;
  }
  const notesData = (event) => {
    setNotes(event.target.value);
    localStorage.setItem("notesDataPoints", JSON.stringify(notes));
  };
  const upButtonClickHours = () => {
    setHoursInput(hoursInput + 1);
  };
  const downButtonClickHours = () => {
    setHoursInput(hoursInput - 1);
  };
  const upButtonClickMinutes = () => {
    setMinuteInput(minuteInput + 1);
  };
  const downButtonClickMinutes = () => {
    setMinuteInput(minuteInput - 1);
  };
  const upButtonClickSeconds = () => {
    setSecondsInput(secondsInput + 1);
  };
  const downButtonClickSeconds = () => {
    setSecondsInput(secondsInput - 1);
  };
  const startTimer = () => {
    let totalSeconds = hoursInput * 3600 + minuteInput * 60 + secondsInput;
    let interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        setHoursTimerInput(hours);
        setMinuteTimerInput(minutes);
        setSecondsTimerInput(seconds);
      }

      if (totalSeconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  return (
    <div className="main-container-w ">
      <div className="first-container-w">
        <div style={{ display: "flex" }}>
          <div className="cards-container-w">
            <div className="details-card-w">
              <div className="img-w">
                <img src={img} alt="" height={200} />
              </div>
              <div
                className="rest-w"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  fontFamily: "DM Sans",
                  flexWrap: "wrap",
                  overflow: "auto",
                }}
              >
                <div>
                  {myData && (
                    <p style={{ fontSize: "0.8rem", margin: "1rem" }}>
                      {myData.Name}
                    </p>
                  )}
                  {myData && (
                    <p style={{ fontSize: "0.8rem", margin: "1rem" }}>
                      {myData.Email}
                    </p>
                  )}
                  {myData && (
                    <h1 style={{ margin: "1rem", fontSize: "1.2rem" }}>
                      {myData.UserName}
                    </h1>
                  )}
                </div>

                <div
                  className="cats-w"
                  style={{
                    marginTop: "1rem",
                    maxHeight: "100px",
                    width: "13rem",
                  }}
                >
                  {catData &&
                    catData.map((cat, index) => (
                      <button
                        style={{
                          backgroundColor: "#9F94FF",
                          border: "none",
                          borderRadius: "2rem",
                          width: "5rem",
                          height: "1.5rem",
                          fontSize: "0.8rem",
                          color: "white",
                          textAlign: "left",
                          paddingLeft: "0.5rem",
                          marginBottom: "1rem",
                          marginRight: "1rem",
                        }}
                        key={index}
                      >
                        {cat}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div
              className="weather-card-w"
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "DM Sans",
                  fontSize: "1.5rem",
                  justifyContent: "space-around",
                  fontWeight: "600",
                  height: "5rem",
                  alignItems: "center",
                  backgroundColor: "#FF4ADE",
                  borderTopLeftRadius: "2rem",
                  borderTopRightRadius: "2rem",
                  letterSpacing: "0.1rem",
                  overflow: "auto",
                }}
              >
                <p style={{ textAlign: "center", margin: "0" }}>
                  {month}-{day}-{currentDateTime.getFullYear()}
                </p>
                <p style={{ textAlign: "center", margin: "0" }}>
                  {currentDateTime.getHours()}:{currentDateTime.getMinutes()} PM
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "8rem",
                  fontFamily: "DM Sans",
                }}
              >
                {weatherData && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "inherit",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "1rem",
                      }}
                    >
                      <img src={img1} alt="not found" height={40} />

                      <p
                        style={{
                          margin: "0",
                          fontSize: "0.8rem",
                          width: "6rem",
                        }}
                      >
                        {weatherData.current.condition.text}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "inherit",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "1rem",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontSize: "1.5rem",
                          fontWeight: "400",
                        }}
                      >
                        {weatherData.current.temp_c}°C
                      </p>
                      <div
                        style={{
                          display: "flex",
                          width: "8rem",
                          justifyContent: "space-around",
                          marginLeft: "1.8rem",
                        }}
                      >
                        <img src={img2} alt="not found" height={30} />
                        <p
                          style={{
                            margin: "0",
                            maxWidth: "6rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          {weatherData.current.pressure_mb} mbar Pressure
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "inherit",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "8rem",
                          justifyContent: "space-between",
                          marginLeft: "1rem",
                        }}
                      >
                        <img src={img3} alt="not found" height={30} />
                        <p
                          style={{
                            margin: "0",
                            maxWidth: "4rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          {weatherData.current.wind_kph} Km/h Wind
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "7rem",
                          justifyContent: "space-between",
                          marginLeft: "1rem",
                        }}
                      >
                        <img src={img4} alt="not found" height={30} />
                        <p
                          style={{
                            margin: "0",
                            maxWidth: "4rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          {weatherData.current.humidity}% Humidity
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="middle-container">
            <h1>All Notes</h1>

            <textarea
              name="notes"
              onChange={notesData}
              value={notes}
              id="notes"
              cols="20"
              rows="20"
            ></textarea>
          </div>
        </div>
        <div className="stopwatch">
          <div className="stop-icon">
            <div className="circular-progress">
              <h1
                style={{
                  fontFamily: "DM Sans",
                  letterSpacing: "0.2rem",
                  color: "white",
                }}
              >
                {hoursTimerInput}:{minuteTimerInput}:{secondsTimerInput}
              </h1>
            </div>
          </div>
          <div className="rest-stopwatch">
            <div className="timers">
              <div
                className="hours"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "DM Sans",
                    fontSize: "1.3rem",
                  }}
                >
                  Hours
                </p>
                <img src={up} alt="" width={20} onClick={upButtonClickHours} />
                <input
                  type="text"
                  value={hoursInput}
                  style={{
                    width: "2.4rem",
                    height: "3.5rem",
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "DM Sans",
                    fontSize: "2rem",
                    color: "white",
                    paddingLeft: "1rem",
                  }}
                />
                <img
                  src={down}
                  alt=""
                  width={20}
                  onClick={downButtonClickHours}
                />
              </div>
              <div
                className="hminutes"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "DM Sans",
                    fontSize: "1.3rem",
                  }}
                >
                  Minutes
                </p>
                <img
                  src={up}
                  alt=""
                  width={20}
                  onClick={upButtonClickMinutes}
                />
                <input
                  type="text"
                  value={minuteInput}
                  style={{
                    width: "2.4rem",
                    height: "3.5rem",
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "DM Sans",
                    fontSize: "2rem",
                    color: "white",
                    paddingLeft: "1rem",
                  }}
                />
                <img
                  src={down}
                  alt=""
                  width={20}
                  onClick={downButtonClickMinutes}
                />
              </div>
              <div
                className="seconds"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "DM Sans",
                    fontSize: "1.3rem",
                  }}
                >
                  Seconds
                </p>
                <img
                  src={up}
                  alt=""
                  width={20}
                  onClick={upButtonClickSeconds}
                />
                <input
                  type="text"
                  value={secondsInput}
                  style={{
                    width: "2.4rem",
                    height: "3.5rem",
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "DM Sans",
                    fontSize: "2rem",
                    color: "white",
                    paddingLeft: "1rem",
                  }}
                />
                <img
                  src={down}
                  alt=""
                  width={20}
                  onClick={downButtonClickSeconds}
                />
              </div>
            </div>
            <div className="start-button">
              <button id="start-button1" onClick={startTimer}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="second-container-w">
        <div className="ss">
          <div
            className="news-card-w"
            style={{
              backgroundImage:
                newsData &&
                newsData.articles &&
                newsData.articles.length > 0 &&
                newsData.articles[currentNewsIndex].urlToImage
                  ? `url(${newsData.articles[currentNewsIndex].urlToImage})`
                  : "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "40rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {newsData && newsData.articles && newsData.articles.length > 0 ? (
              <div className="news-item" style={{}}>
                <div
                  style={{
                    height: "9rem",
                    backgroundColor: "rgba(0, 0, 0, 0.74)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    textAlign: "left",
                    paddingLeft: "2rem",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontFamily: "DM Sans",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      width: "20rem",
                    }}
                  >
                    {newsData.articles[currentNewsIndex].title}
                  </p>
                  <div
                    style={{
                      color: "white",
                      fontFamily: "DM Sans",
                      fontSize: "0.8rem",
                      letterSpacing: "0.2rem",
                    }}
                  >
                    {month}-{day}-{currentDateTime.getFullYear()} |{" "}
                    {currentDateTime.getHours()}:{currentDateTime.getMinutes()}{" "}
                    PM
                  </div>
                </div>
                <div
                  style={{
                    height: "18.5rem",
                    width: "20rem",
                    color: "black",
                    fontFamily: "DM Sans",
                    fontSize: "1rem",
                    marginLeft: "4rem",
                  }}
                >
                  <p>{newsData.articles[currentNewsIndex].description}</p>
                  <p>{newsData.articles[currentNewsIndex].content}</p>
                </div>
              </div>
            ) : (
              <p>No news data available</p>
            )}
          </div>
          <button >Browse</button>
        </div>
      </div>
    </div>
  );
}

export default WeatherandNews;
