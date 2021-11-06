const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const BASE_ICON_URL = "https://openweathermap.org/img/wn";

type WeatherResponse = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
};

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );

  const body = await res.json();

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return body;
};

export const composeIconURL = (icon: string) => {
  return `${BASE_ICON_URL}/${icon}@4x.png`;
};
