import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/Auth"; 

import styles from "./Home.module.css";

function Home() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const { handleCreateRoom } = useAuth(); 

  // 1. FUNÇÃO PARA ENTRAR NA SALA (ALUNO) - ATUALIZADA SEM PROMPT FEIO
  async function handleJoinRoom() {
    if (!code.trim()) {
      alert("Por favor, digite o código da sala!");
      return;
    }

    // Sinaliza que este usuário está entrando no fluxo como ALUNO
    localStorage.setItem("testika_user_role", "ALUNO");

    // Redireciona direto para a página da sala.
    navigate(`/sala?code=${code.trim()}`);
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
            Crie quizzes in tempo real, participe usando códigos e torne qualquer assunto mais interativo.
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

            <button className={styles.secondary} onClick={handleCreateRoom}>
              Criar sala
            </button>

            {/* 🚀 BOTÃO DO BANCO DE QUESTÕES ENCAIXADO AQUI: */}
            <button className={styles.bankButton} onClick={() => navigate("/banco-de-questoes")}>
              Banco de Questões
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