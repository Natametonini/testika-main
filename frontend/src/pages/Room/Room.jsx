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

  const [phase, setPhase] = useState("lobby"); // lobby | playing | finished

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);

  const question = mockQuestions[current];

  // LOGIN
  useEffect(() => {
    if (!user) {
      const name = prompt("Digite seu nome para entrar no quiz:");
      if (name) login(name);
    }
  }, []);

  // TIMER
  useEffect(() => {
    if (phase !== "playing") return;
    if (phase === "finished") return;

    if (time === 0) {
      nextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, phase]);

  function selectOption(index) {
    setSelected(index);

    if (index === question.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(nextQuestion, 800);
  }

  function nextQuestion() {
    setSelected(null);
    setTime(10);

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

        <p className={styles.subtitle}>
          Aguarde o host iniciar o quiz
        </p>

        <div className={styles.infoBox}>
          <div>
            <span>Código da sala</span>
            <strong>{code}</strong>
          </div>

          <div>
            <span>Jogador</span>
            <strong>{user?.name}</strong>
          </div>
        </div>

        <div className={styles.loading}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>

        <button 
        className={styles.primary}
        onClick={() => navigate("/")}
        >
          Sair da sala
        </button>

        <button
          className={styles.primary}
          onClick={() => setPhase("playing")}
        >
          Iniciar (demo)
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

        <div className={styles.trophy}>🏆</div>

        <h1>Quiz finalizado!</h1>

        <p className={styles.score}>
          Sua pontuação
        </p>

        <h2>
          {score} / {mockQuestions.length}
        </h2>

        <div className={styles.bar}>
          <div
            style={{
              width: `${(score / mockQuestions.length) * 100}%`
            }}
          />
        </div>

        <button 
        className={styles.primary}
        onClick={() => navigate("/")}>
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
        <button 
        className={styles.primary}
        onClick={() => navigate("/")}>
          Menu
        </button>

        <h3>{code}</h3>

        <span>{user?.name}</span>
      </div>

      <div className={styles.timer}>
        <div style={{ width: `${time * 10}%` }} />
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