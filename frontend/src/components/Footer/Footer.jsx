import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Testika</p>

      <div>
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>
    </footer>
  );
}

export default Footer;