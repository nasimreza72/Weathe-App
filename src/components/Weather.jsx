import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/Context.jsx";
import moment from "moment";

function Weather() {
  const {
    celsius,
    windSpeed,
    humidity,
    clouds,
    location,
    longitude,
    ICAO,
    cityName,
    sunRise,
    setSunRise,
    sunSet,
    setSunSet,
  } = useContext(userContext);

  return (
    <div className="weather">


{/* <div className="sunPNG">
        <img
          src="https://png2.cleanpng.com/sh/156cfe297f19ed87b04ff6e1145292af/L0KzQYi4UcI5N5U5e5GAYUHnQIPsWcJnP5VpUJCBOES3RIeAVsE2OWI9TaICMkm0SYW8TwBvbz==/5a1d02e92f7dd8.6844467615118507291945.png"
          alt=""
        />
      </div> */}
      <div className="cloudPNG">
        <img
          src="https://www.transparentpng.com/thumb/clouds/AjeEHR-clouds-best-png.png"
          alt="clouds best png @transparentpng.com"
        ></img>
      </div> 








      <div className="date-info">{location}</div>   
      <div
        style={{
          fontSize: "1.2rem",
          textShadow: ".5px .5px .75px rgb(19, 86, 148)"
        }}>

        {moment().format("llll")}
      </div>

      <div>
        <span>{celsius}</span>
        <span
          style={{ fontSize: "4rem", position: "relative", bottom: "1.5rem" }}
        >
          ℃
        </span>
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          textShadow: "1px 1px 1.5px rgb(19, 86, 148)",
          position:"relative",
          bottom: "2rem"
        }}
      >
        {clouds}
      </div>
      

      <div className="iconList">
        <div style={{ fontSize: '1.1rem', fontWeight: "bold" }}>
        🍃 {windSpeed}kph
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: "bold" }}>
        💦  {humidity}% 
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: "bold" }}>
        🌄 {sunRise} 
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: "bold" }}>
        🌅  {sunSet} 
        </div>
      </div>


    </div>
  );
}
export default Weather;
