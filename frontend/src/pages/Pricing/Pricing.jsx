import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <h1>Planos simples e transparentes</h1>
        <p>Escolha o plano ideal para sua escola ou uso pessoal</p>
      </section>

      <section className={styles.cards}>

        {/* FREE */}
        <div className={styles.card}>
          <h3>Gratuito</h3>
          <h2>R$0</h2>

          <ul>
            <li>✔ Quizzes básicos</li>
            <li>✔ 1 sala ativa</li>
            <li>✔ Acesso limitado</li>
          </ul>

          <button>Começar grátis</button>
        </div>

        {/* PRO */}
        <div className={`${styles.card} ${styles.highlight}`}>
          <h3>Pro</h3>
          <h2>R$19/mês</h2>

          <ul>
            <li>✔ Quizzes ilimitados</li>
            <li>✔ Salas em tempo real</li>
            <li>✔ Relatórios completos</li>
          </ul>

          <button>Assinar Pro</button>
        </div>

        {/* SCHOOL */}
        <div className={styles.card}>
          <h3>Escolas</h3>
          <h2>Personalizado</h2>

          <ul>
            <li>✔ Multi-professores</li>
            <li>✔ Dashboard completo</li>
            <li>✔ Suporte dedicado</li>
          </ul>

          <button>Falar conosco</button>
        </div>

      </section>

    </div>
  );
}

export default Pricing;