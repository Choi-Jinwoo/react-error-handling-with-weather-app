import { Suspense, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Fail from "../components/Fail";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

const DEFAULT_CITY = "Daegu";

const MainPage = () => {
  const [city, setCity] = useState(DEFAULT_CITY);

  const search = (keyword: string) => {
    setCity(keyword);
  };

  return (
    <>
      <SearchBar search={search} />
      <ErrorBoundary fallback={<Fail />}>
        <Suspense fallback={<Loading />}>
          <Weather city={city} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
