import { useQuery } from "react-query";
import { fetchWeather } from "../network/weather";

const WEATHER_QUERY_KEY = "weather;";

const useWeather = () => {
  return useQuery(WEATHER_QUERY_KEY, fetchWeather, {
    suspense: true,
    refetchOnWindowFocus: false,
  });
};

export default useWeather;
