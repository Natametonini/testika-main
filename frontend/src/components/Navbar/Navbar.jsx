import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Testika</div>

      <nav>
        <ul className={styles.menu}>
          <li>Início</li>
          <li>Sobre</li>
          <li>Planos</li>
          <li>Contato</li>
        </ul>
      </nav>

      <button className={styles.button}>
        Criar Sala
      </button>
    </header>
  );
}

export default Navbar;