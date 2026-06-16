import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/Auth"; 

import styles from "./Home.module.css";

function Home() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { handleCreateRoom } = useAuth(); 

  async function handleJoinRoom() {
    if (!code.trim()) {
      alert("Por favor, digite o código da sala!");
      return;
    }
    localStorage.setItem("testika_user_role", "ALUNO");
    navigate(`/sala?code=${code.trim()}`);
  }

  return (
    // Note que voltou a ser apenas styles.page. 
    // O App.jsx já coloca a classe "dark" por fora se o modo escuro estiver ativo!
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>

        {/* LADO ESQUERDO: TEXTO E ENTRADA DE CÓDIGO */}
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

          {/* Card focado no Aluno (Digitar Código) */}
          <div className={styles.actionsCard}>
            <input
              type="text"
              placeholder="Digite o código da sala (Ex: 1234)"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className={styles.primaryBtn} onClick={handleJoinRoom}>
              Entrar na sala
            </button>
          </div>

          {/* Área do Professor */}
          <div className={styles.teacherActions}>
            <span>É professor?</span>
            <button className={styles.secondary} onClick={handleCreateRoom}>
              Criar sala
            </button>
            <button className={styles.bankButton} onClick={() => navigate("/banco-de-questoes")}>
              Banco de Questões
            </button>
          </div>
        </motion.div>

        {/* LADO DIREITO: O CARD (Simulação do Quiz com suas alterações) */}
        <motion.div 
          className={styles.heroCard}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.mock}>
            <span className={styles.badge}>Pergunta 1 de 5</span>
            <h3>Qual é o melhor site de aprendizado em Quizzes? </h3>
            <div className={styles.options}>
              <span className={styles.optCorreta}>🔴 Testika</span>
              <span className={styles.optErrada}>🟣 Kahoot</span>
              <span className={styles.optIntermediaria}>🟢 Quizizz</span>
              <span className={styles.optIntermediaria}>🟡 Genially</span>
            </div>
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