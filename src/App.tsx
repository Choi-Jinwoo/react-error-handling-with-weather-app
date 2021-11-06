import { Suspense } from "react";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Weather />
      </Suspense>
    </div>
  );
}

export default App;
