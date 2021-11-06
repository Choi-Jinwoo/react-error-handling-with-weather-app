import { ChangeEventHandler, Suspense, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Fail from "../components/Fail";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

const MainPage = () => {
  const [searchCity, setSearchCity] = useState("");

  const onSearchCityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <>
      <SearchBar keyword={searchCity} onChange={onSearchCityChange} />
      <ErrorBoundary fallback={<Fail />}>
        <Suspense fallback={<Loading />}>
          <Weather />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
