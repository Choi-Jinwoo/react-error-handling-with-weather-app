import { useQuery } from "react-query";
import { fetchWeather } from "../network/weather";

const WEATHER_QUERY_KEY = "weather;";

const useWeather = (city: string) => {
  return useQuery([WEATHER_QUERY_KEY, city], () => fetchWeather(city), {
    suspense: true,
    refetchOnWindowFocus: false,
  });
};

export default useWeather;
