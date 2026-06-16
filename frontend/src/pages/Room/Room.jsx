import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/Auth";

import styles from "./Room.module.css";

const mockQuestions = [
  {
    question: "Qual linguagem o React utiliza?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: 2,
  },
  {
    question: "Quem criou o React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: 1,
  },
];

function Room() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get("code");
  const { user, login } = useAuth();

  const [phase, setPhase] = useState("lobby");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  // MODAL LOGIN
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempName, setTempName] = useState("");

  /* --- 🚀 ESTADO PARA GUARDAR OS JOGADORES DA API --- */
  const [jogadores, setJogadores] = useState([]);

  const question = mockQuestions[current] || mockQuestions[0];

  // LOGIN CHECK
  useEffect(() => {
    if (!user) {
      setShowNameModal(true);
    }
  }, [user]);

  /* --- 🚀 POLLING PARA BUSCAR JOGADORES DO BACKEND --- */
  useEffect(() => {
    // Se o modal estiver aberto ou não houver código de sala, não faz nada
    if (showNameModal || !code) return;

    const URL_API = import.meta.env.VITE_API_URL || "http://localhost:8080";

    async function buscarJogadores() {
      try {
        const response = await fetch(`${URL_API}/api/salas/${code}/jogadores`);
        if (response.ok) {
          const dados = await response.json();
          setJogadores(dados);
        }
      } catch (error) {
        console.error("Erro ao buscar jogadores do backend:", error);
      }
    }

    buscarJogadores();
    const intervalo = setInterval(buscarJogadores, 2000);

    return () => clearInterval(intervalo);
  }, [code, showNameModal, phase]);

  /* ---------------- LOGIN MODAL (MODIFICADO) ---------------- */

  if (showNameModal) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <h2>Bem-vindo ao Testika</h2>
          <p>Digite seu nome para entrar na sala</p>
          <input
            type="text"
            placeholder="Seu nome"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button
            onClick={async () => {
              if (!tempName.trim()) return;

              const role = localStorage.getItem("testika_user_role");
              const URL_API = import.meta.env.VITE_API_URL || "http://localhost:8080";

              // 🚀 SE FOR ALUNO: Registra o jogador no banco de dados via API antes de fechar
              if (role === "ALUNO") {
                try {
                  const response = await fetch(`${URL_API}/api/salas/entrar/${code.trim()}`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nickname: tempName.trim() }),
                  });

                  if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(errorText || "Erro ao entrar na sala.");
                  }

                  const jogadorData = await response.json();
                  localStorage.setItem("testika_user_data", JSON.stringify(jogadorData));

                } catch (error) {
                  alert(`Ops! ${error.message}`);
                  return; // Cancela o fechamento do modal caso a API rejeite
                }
              }

              // Salva o nome do usuário no contexto e fecha a modal bonita
              login(tempName.trim());
              setShowNameModal(false);
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- SELECT ANSWER ---------------- */

  function selectOption(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 600);
  }

  function nextQuestion() {
    setSelected(null);

    if (current < mockQuestions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setPhase("finished");
    }
  }

  /* ---------------- LOBBY ---------------- */

  if (phase === "lobby") {
    return (
      <div className={styles.lobby}>
        <div className={styles.lobbyCard}>

          <h1>Sala de Espera</h1>
          <p>Aguardando início do quiz</p>

          <div className={styles.infoBox}>
            <div>
              <span>Código da Sala</span>
              <strong>{code}</strong>
            </div>
            <div>
              <span>Você</span>
              <strong>{user?.name}</strong>
            </div>
          </div>

          {/* EXIBIÇÃO DA LISTA COMPLETA DE JOGADORES */}
          <div className={styles.playersListSection}>
            <h3>Jogadores na sala ({jogadores.length})</h3>
            <div className={styles.playersGrid}>
              {jogadores.length === 0 ? (
                <p className={styles.loadingPlayers}>Aguardando novos jogadores...</p>
              ) : (
                jogadores.map((jg) => (
                  <div key={jg.id} className={styles.playerCard}>
                    <span className={styles.playerIcon}>👤</span>
                    <span className={styles.playerName}>{jg.nickname}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <button
            className={styles.primary}
            onClick={() => setPhase("playing")}
          >
            Iniciar (demo)
          </button>

          <button
            className={styles.primary}
            onClick={() => navigate("/")}
          >
            Sair
          </button>

        </div>
      </div>
    );
  }

  /* ---------------- FINISHED ---------------- */

  if (phase === "finished") {
    return (
      <div className={styles.result}>
        <div className={styles.resultCard}>
          <h1>Quiz finalizado!</h1>
          <h2>
            {score} / {mockQuestions.length}
          </h2>
          <button
            className={styles.primary}
            onClick={() => navigate("/")}
          >
            Voltar ao menu
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- GAME ---------------- */

  return (
    <div className={styles.room}>
      <div className={styles.header}>
        <button onClick={() => navigate("/")}>
          Menu
        </button>
        <h3>{code}</h3>
        <span>{user?.name}</span>
      </div>

      <h1>{question.question}</h1>

      <div className={styles.options}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => selectOption(i)}
            disabled={selected !== null}
            className={
              selected === i
                ? i === question.answer
                  ? styles.correct
                  : styles.wrong
                : ""
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Room;