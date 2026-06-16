import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"; // 🚀 1. IMPORTA O FOOTER AQUI (Ajuste o caminho se necessário)

function Layout({ isDarkMode, toggleTheme }) {
  return (
    <>
      {/* Navbar fixa no topo */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Conteúdo dinâmico das páginas (Home, Sobre, Planos...) */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      
      {/* 🚀 2. INSERE O FOOTER AQUI NO FINAL */}
      <Footer />
    </>
  );
}

export default Layout;