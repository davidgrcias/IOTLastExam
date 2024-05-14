import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

function Information() {
  const [data, setData] = useState({});
  const location = "Bali"; // Static location as Bali

  // Correctly formatted API URL with dynamic location insertion
  // Note: You must include 'https://' before the API URL.
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Bali&units=metric&appid=e70294cf29182e586a00cf407190bff2";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="templateweather/Information.css" />
      </Helmet>
      <div className="app">
        <div className="search"></div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.city ? data.city.name : "Loading..."}</p>
            </div>
            <div className="temp">
              {data.list ? (
                <h1 id="white">{data.list[0].main.temp.toFixed()}°C</h1>
              ) : null}
            </div>
            <div className="description">
              {data.list ? <p>{data.list[0].weather[0].main}</p> : null}
            </div>
          </div>

          {data.city && (
            <div className="bottom">
              <div className="feels">
                {data.list ? (
                  <p className="bold">
                    {data.list[0].main.feels_like.toFixed()}°C
                  </p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.list ? (
                  <p className="bold">{data.list[0].main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.list ? (
                  <p className="bold">
                    {data.list[0].wind.speed.toFixed()} MPH
                  </p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Information;
