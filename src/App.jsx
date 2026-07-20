import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ElevatorPitch from "./pages/ElevatorPitch";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Existing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/elevator-pitch" element={<ElevatorPitch />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;