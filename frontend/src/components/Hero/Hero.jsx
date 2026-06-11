import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Crie quizzes em tempo real,
          participe usando códigos e
          torne qualquer assunto mais divertido.
        </h1>

        <p>
          Ferramenta perfeita para professores
          ensinarem através da gamificação.
        </p>

        <div className={styles.buttons}>
          <button>Criar Quiz</button>
          <button className={styles.secondary}>
            Saiba Mais
          </button>
        </div>
      </div>

      <div className={styles.image}>
        <img
          src="https://placehold.co/600x450"
          alt="Quiz illustration"
        />
      </div>
    </section>
  );
}

export default Hero;