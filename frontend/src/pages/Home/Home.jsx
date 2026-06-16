import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

function Home() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  function handleJoinRoom() {
    if (!code.trim()) return;
    navigate(`/sala?code=${code}`);
  }

  return (
    <div className={styles.page}>

      {/* HERO */}
<section className={styles.hero}>

  <motion.div
    className={styles.heroText}
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1>
      Aprender nunca foi tão <span>divertido</span>
    </h1>

    <p>
      Crie quizzes em tempo real, participe usando códigos e torne qualquer assunto mais interativo.
    </p>

    <div className={styles.actionsCard}>

      <input
        type="text"
        placeholder="Digite o código da sala"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleJoinRoom}>
        Entrar na sala
      </button>

      <button className={styles.secondary}>
        Criar sala
      </button>

    </div>

  </motion.div>

</section>

      {/* STATS */}
      <section className={styles.statsSection}>

  <div className={styles.statCard}>
    <h2>10k+</h2>
    <p>Quizzes criados</p>
  </div>

  <div className={styles.statCard}>
    <h2>50k+</h2>
    <p>Alunos ativos</p>
  </div>

  <div className={styles.statCard}>
    <h2>1M+</h2>
    <p>Respostas enviadas</p>
  </div>

</section>

      {/* HOW */}
      <section className={styles.how}>
        <h2 className={styles.titleHow}>Como funciona</h2>

        <div className={styles.grid}>
          <div>
            <h3>1. Crie</h3>
            <p>Monte quizzes personalizados em poucos cliques.</p>
          </div>

          <div>
            <h3>2. Compartilhe</h3>
            <p>Envie o código da sala para seus alunos.</p>
          </div>

          <div>
            <h3>3. Jogue</h3>
            <p>Responda em tempo real e veja o ranking ao vivo.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;