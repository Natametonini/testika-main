import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Room from "../pages/Room/Room";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Pricing />} />
      </Route>

      <Route path="/sala" element={<Room />} />

    </Routes>
  );
}

export default AppRoutes;