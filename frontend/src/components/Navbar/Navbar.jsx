import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import logo from "./Logo.png";

import styles from "./Navbar.module.css";

function Navbar() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  function handleCreateRoom() {
    if (!user) {
      const name = prompt("Digite seu nome para continuar:");
      if (!name) return;
      login(name);
    }

    navigate("/sala?host=true");
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

        <button onClick={handleCreateRoom}>
          Criar Sala
        </button>
      </nav>
    </header>
  );
}

export default Navbar;