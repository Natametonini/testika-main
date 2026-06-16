import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import logo from "./Logo.png";

import styles from "./Navbar.module.css";

function Navbar() {
  // 🚀 IMPORTAMOS O 'handleCreateRoom' QUE CRIAMOS NO CONTEXTO GLOBAL
  const { user, login, handleCreateRoom } = useAuth();

  // 🚀 NOVA LOGICA DO CLIQUE
  function cliqueCriarSala() {
    // Dispara a função global que vai no seu Java, cria a sala e redireciona
    handleCreateRoom();
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="Testika logo" className={styles.logo} />
        </Link>

        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/planos">Planos</Link>
        </div>

        {/* 🚀 AGORA O BOTÃO CHAMA A FUNÇÃO CORRETA CONECTADA À API */}
        <button onClick={cliqueCriarSala}>
          Criar Sala
        </button>
      </nav>
    </header>
  );
}

export default Navbar;