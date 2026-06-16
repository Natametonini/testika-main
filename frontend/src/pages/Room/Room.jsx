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

  const question = mockQuestions[current] || mockQuestions[0];

  // LOGIN CHECK
  useEffect(() => {
    if (!user) {
      setShowNameModal(true);
    }
  }, []);

  /* ---------------- LOGIN MODAL ---------------- */

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
            onClick={() => {
              if (!tempName.trim()) return;

              login(tempName);
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
              <span>Código</span>
              <strong>{code}</strong>
            </div>

            <div>
              <span>Jogador</span>
              <strong>{user?.name}</strong>
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