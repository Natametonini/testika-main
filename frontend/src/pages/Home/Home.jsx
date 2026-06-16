import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

function Home() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  // 1. FUNÇÃO PARA ENTRAR NA SALA (ALUNO)
  async function handleJoinRoom() {
    if (!code.trim()) {
      alert("Por favor, digite o código da sala!");
      return;
    }

    const nickname = prompt("Digite seu nickname para entrar na sala:");
    if (!nickname || !nickname.trim()) {
      alert("Você precisa de um nickname para jogar!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/salas/entrar/${code.trim()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname: nickname.trim() }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Erro ao entrar na sala.");
      }

      const jogadorData = await response.json();
      
      // Salva os dados do jogador e o tipo dele (ALUNO) para a tela da sala usar
      localStorage.setItem("testika_user_data", JSON.stringify(jogadorData));
      localStorage.setItem("testika_user_role", "ALUNO");

      // Redireciona para a página da sala
      navigate(`/sala?code=${code.trim()}`);

    } catch (error) {
      alert(`Ops! ${error.message}`);
    }
  }

  // 2. FUNÇÃO PARA CRIAR A SALA (PROVISÓRIO COM QUIZ ID = 1)
  async function handleCreateRoom() {
    const quizIdDefeito = 2; // ID do Quiz que já deve existir no seu banco de dados

    try {
      const response = await fetch(`http://localhost:8080/api/salas/criar/${quizIdDefeito}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Erro ao criar a sala.");
      }

      // Recebe o objeto Sala que seu Spring Boot devolveu (com o PIN gerado)
      const salaData = await response.json();
      const pinGerado = salaData.pin; // Garanta que o atributo no seu Java se chama 'pin'

      // Salva que este usuário é o dono da sala (PROFESSOR)
      localStorage.setItem("testika_user_role", "PROFESSOR");
      localStorage.setItem("testika_sala_data", JSON.stringify(salaData));

      alert(`Sala criada com sucesso! O código é: ${pinGerado}`);

      // Redireciona para a mesma página de sala, mas com o PIN gerado pelo seu banco
      navigate(`/sala?code=${pinGerado}`);

    } catch (error) {
      alert(`Erro ao criar sala: ${error.message}`);
    }
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

            {/* ATRELAMOS A FUNÇÃO DE CRIAR AQUI */}
            <button className={styles.secondary} onClick={handleCreateRoom}>
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