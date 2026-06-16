import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Room from "../pages/Room/Room";
import QuestionBank from "../pages/QuestionBank/QuestionBank"; 

// 🚀 RECEBEMOS OS DADOS DO TEMA AQUI NO APPROUTES
function AppRoutes({ isDarkMode, toggleTheme }) {
  return (
    <Routes>

      {/* 🚀 REPASSAMOS PARA O LAYOUT AQUI */}
      <Route element={<Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Pricing />} />
        <Route path="/banco-de-questoes" element={<QuestionBank />} />
      </Route>

      <Route path="/sala" element={<Room />} />

    </Routes>
  );
}

export default AppRoutes;