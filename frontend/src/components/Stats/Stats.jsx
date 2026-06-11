import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      <div>
        <h2>10.000+</h2>
        <p>Quizzes criados</p>
      </div>

      <div>
        <h2>50.000+</h2>
        <p>Alunos ativos</p>
      </div>

      <div>
        <h2>98%</h2>
        <p>Satisfação</p>
      </div>
    </section>
  );
}