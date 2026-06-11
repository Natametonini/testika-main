import styles from "./Features.module.css";

function Features() {
  const cards = [
    "Criação de quizzes",
    "Ranking em tempo real",
    "Relatórios de desempenho",
    "Salas privadas",
    "Gamificação do ensino",
    "Acompanhamento dos alunos",
  ];

  return (
    <section className={styles.features}>
      <h2>Por que usar o Testika?</h2>

      <div className={styles.grid}>
        {cards.map((item) => (
          <div key={item} className={styles.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;