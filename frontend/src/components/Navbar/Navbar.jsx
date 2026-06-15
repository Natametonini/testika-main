import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <h2>Testika</h2>
        </Link>

        <div className={styles.links}>
          <Link to="/">Home</Link>

          <Link to="/sobre">Sobre</Link>

          <Link to="/planos">Planos</Link>
        </div>

        <button>
          Criar Sala
        </button>
      </nav>
    </header>
  );
}

export default Navbar;