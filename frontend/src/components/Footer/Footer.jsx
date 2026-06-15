import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 Testika
      </p>

      <div className={styles.socials}>
        <FaInstagram />

        <FaLinkedin />

        <FaGithub />
      </div>
    </footer>
  );
}

export default Footer;