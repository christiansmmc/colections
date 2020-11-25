import "./App.css";

import { Router } from "./routes/index.js";
import { Tabs } from "./components/tab";

function App() {
  return (
    <>
      <Tabs />
      <Router />
    </>
  );
}

export default App;
