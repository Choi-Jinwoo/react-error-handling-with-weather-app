import { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Fail from "./components/Fail";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

import "./index.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<Fail />}>
        <Suspense fallback={<Loading />}>
          <Weather />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
