import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Sobre o Testika</h1>
        <p>
          O Testika é uma plataforma de quizzes em tempo real criada para tornar o aprendizado mais divertido, interativo e eficiente.
        </p>
      </section>

      {/* MISSÃO */}
      <section className={styles.section}>
        <h2>Nossa missão</h2>
        <p>
          Ajudar professores e alunos a aprenderem de forma mais leve através de quizzes dinâmicos,
          com resultados em tempo real e gamificação.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className={styles.cards}>
        <div className={styles.card}>
          <h3>🎯 Criar</h3>
          <p>Professores criam quizzes em poucos minutos.</p>
        </div>

        <div className={styles.card}>
          <h3>🚀 Compartilhar</h3>
          <p>Envie um código simples para os alunos entrarem.</p>
        </div>

        <div className={styles.card}>
          <h3>📊 Analisar</h3>
          <p>Acompanhe o desempenho em tempo real.</p>
        </div>
      </section>

    </div>
  );
}

export default About;