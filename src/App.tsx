import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  <QueryClientProvider client={queryClient}>
    return <div className="App"></div>;
  </QueryClientProvider>;
}

export default App;
