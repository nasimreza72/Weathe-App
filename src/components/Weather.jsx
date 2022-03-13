import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/Context.jsx";
import moment from "moment";
import { Icon } from "@iconify/react";

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
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Icon icon="ep:wind-power" /> {windSpeed}kph
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Icon icon="iwwa:humidity" /> {humidity}%
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Icon icon="bi:sunrise" /> {sunRise}
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Icon icon="bi:sunset" /> {sunSet}
        </div>
      </div>


    </div>
  );
}
export default Weather;
