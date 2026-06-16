import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/Auth";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Busca a preferência salva quando o site carrega
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Função que altera o tema (será passada para a Navbar)
  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Essa div garante que a classe .dark seja aplicada no topo do site inteiro */}
        <div className={isDarkMode ? "dark" : ""}>
          {/* Passamos o estado e a função para dentro das rotas via props */}
          <AppRoutes isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;