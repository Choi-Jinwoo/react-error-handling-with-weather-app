import { Suspense, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Fail from "../components/Fail";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

const DEFAULT_CITY = "Seoul";

const MainPage = () => {
  const [city, setCity] = useState(DEFAULT_CITY);

  const search = (keyword: string) => {
    setCity(keyword);
  };

  return (
    <>
      <SearchBar search={search} />
      <ErrorBoundary
        resetKey={city}
        fallback={
          <Fail message={`Error occurred. Check city name '${city}'.`} />
        }
      >
        <Suspense fallback={<Loading />}>
          <Weather city={city} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
