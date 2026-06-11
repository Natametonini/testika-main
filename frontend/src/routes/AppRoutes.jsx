import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Room from "../pages/Room/Room";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Pricing />} />
        <Route path="/sala" element={<Room />} />
        <Route path="/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;