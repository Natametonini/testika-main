import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Room from "../pages/Room/Room";
// 🚀 IMPORT DO BANCO DE QUESTÕES ADICIONADO AQUI:
import QuestionBank from "../pages/QuestionBank/QuestionBank"; 

function AppRoutes() {
  return (
    <Routes>

      {/* Rotas que usam o Layout padrão do site (com Navbar/Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Pricing />} />
        {/* 🚀 NOVA ROTA ADICIONADA AQUI: */}
        <Route path="/banco-de-questoes" element={<QuestionBank />} />
      </Route>

      {/* Rota da sala de jogo (tela cheia, sem o layout padrão) */}
      <Route path="/sala" element={<Room />} />

    </Routes>
  );
}

export default AppRoutes;