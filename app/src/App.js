import Screen1 from "./pages/Screen1/Screen1";
import Screen2 from "./pages/Screen2/Screen2";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
      </Routes>
    </div>
  );
}

export default App;
