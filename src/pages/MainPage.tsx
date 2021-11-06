import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Fail from "../components/Fail";
import Loading from "../components/Loading";
import Weather from "../components/Weather";

const MainPage = () => {
  return (
    <>
      <ErrorBoundary fallback={<Fail />}>
        <Suspense fallback={<Loading />}>
          <Weather />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
