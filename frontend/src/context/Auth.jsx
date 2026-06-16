import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  function login(name) {
    const newUser = { name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  // 🚀 ADICIONADO: FUNÇÃO GLOBAL PARA CRIAR SALA
  async function handleCreateRoom() {
    const quizIdDefeito = 2; // ID do Quiz do seu banco

    try {
      const response = await fetch(`http://localhost:8080/api/salas/criar/${quizIdDefeito}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Erro ao criar a sala.");
      }

      const salaData = await response.json();
      const pinGerado = salaData.pin;

      localStorage.setItem("testika_user_role", "PROFESSOR");
      localStorage.setItem("testika_sala_data", JSON.stringify(salaData));

      // Redireciona usando a API nativa do navegador
      window.location.href = `/sala?code=${pinGerado}`;

    } catch (error) {
      alert(`Erro ao criar sala: ${error.message}`);
    }
  }

  // 🚀 INJETADO 'handleCreateRoom' NO VALUE DO PROVIDER
  return (
    <AuthContext.Provider value={{ user, login, logout, handleCreateRoom }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}