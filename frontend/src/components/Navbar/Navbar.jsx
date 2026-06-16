import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import logo from "./Logo.png";

import styles from "./Navbar.module.css";

// 🚀 RECEBEMOS AS PROPS DO TEMA AQUI
function Navbar({ isDarkMode, toggleTheme }) {
  const { handleCreateRoom } = useAuth();

  function cliqueCriarSala() {
    handleCreateRoom();
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="Testika logo" className={styles.logo} />
        </Link>

        {/* 🚀 O SLIDER AGORA FICA AQUI DENTRO, NO MEIO DA NAVBAR */}
        <div className={styles.themeToggleContainer}>
          <span className={styles.themeLabel}>
            {isDarkMode ? "🌙" : "☀️"}
          </span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={toggleTheme} 
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.links}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/sobre" className={styles.navLink}>Sobre</Link>
          <Link to="/planos" className={styles.navLink}>Planos</Link>
        </div>

        <button onClick={cliqueCriarSala} className={styles.navBtn}>
          Criar Sala
        </button>
      </nav>
    </header>
  );
}

export default Navbar;