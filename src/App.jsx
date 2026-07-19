import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ElevatorPitch from "./pages/ElevatorPitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elevator-pitch" element={<ElevatorPitch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;