import useWeather from "../../hooks/useWeather";

const Weather = () => {
  const { data } = useWeather();

  return <div>{data?.main.humidity}</div>;
};

export default Weather;
