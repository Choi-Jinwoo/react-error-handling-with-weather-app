import React from "react";
import useWeather from "../../hooks/useWeather";
import { composeIconURL } from "../../network/weather";

import "./index.css";

type Props = {
  city: string;
};

const Weather = ({ city }: Props) => {
  const { data } = useWeather(city);

  if (data === undefined) return null;

  const { main, weather } = data;

  return (
    <section className="weather">
      <p className="weather__text--city">Weather in {city}</p>
      <h1 className="weather__title">{weather[0].main}</h1>
      <p className="weather__description">{weather[0].description}</p>
      <img
        className="weather__icon"
        alt={weather[0].main}
        src={composeIconURL(weather[0].icon)}
      />
      <span className="weather__text--temp">{`${main.temp} °`}</span>
    </section>
  );
};

export default Weather;
