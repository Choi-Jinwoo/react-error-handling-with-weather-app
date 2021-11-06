const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const DEFAULT_CITY_NAME = "Daegu";

type WeatherResponse = {
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};

export const fetchWeather = async (): Promise<WeatherResponse> => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${DEFAULT_CITY_NAME}&appid=${WEATHER_API_KEY}`
  );

  const body = await res.json();

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return body;
};
