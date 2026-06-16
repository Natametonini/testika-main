import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionBank.module.css";

function QuestionBank() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedQuiz, setExpandedQuiz] = useState(null); // Controla qual quiz está aberto

  useEffect(() => {
    const URL_API = import.meta.env.VITE_API_URL || "http://localhost:8080";

    async function carregarBancoDeQuizzes() {
      try {
        // 🚀 AGORA BATENDO NA ROTA GERAL (TRAZ TODOS OS QUIZZES DO BANCO)
        const response = await fetch(`${URL_API}/api/quizzes`);
        if (response.ok) {
          const dados = await response.json();
          setQuizzes(dados);
        }
      } catch (error) {
        console.error("Erro ao buscar banco de quizzes:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarBancoDeQuizzes();
  }, []);

  // Função para alternar a abertura/fechamento dos detalhes do Quiz
  const toggleQuiz = (quizId) => {
    setExpandedQuiz(expandedQuiz === quizId ? null : quizId);
  };

  if (loading) {
    return <div className={styles.loader}>Carregando Banco de Quizzes...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate("/")} className={styles.btnVoltar}>
          ⬅ Voltar ao Menu
        </button>
        <h1>Banco de Quizzes Existentes</h1>
        <p>Explore todos os quizzes e questões já armazenados no sistema.</p>
      </div>

      <div className={styles.quizList}>
        {quizzes.length === 0 ? (
          <p className={styles.emptyState}>Nenhum quiz cadastrado no banco de dados ainda.</p>
        ) : (
          quizzes.map((quiz) => (
            <div key={quiz.id} className={styles.quizCard}>
              
              {/* Cabeçalho do Card (Clicável para expandir) */}
              <div className={styles.quizHeader} onClick={() => toggleQuiz(quiz.id)}>
                <div>
                  <h2>{quiz.titulo}</h2>
                  <span className={styles.badgeMateria}>{quiz.materia || "Geral"}</span>
                </div>
                <button className={styles.btnExpandir}>
                  {expandedQuiz === quiz.id ? "▲ Recolher" : "▼ Ver Questões"}
                </button>
              </div>

              {/* Se o Quiz estiver expandido, exibe suas respectivas perguntas/alternativas */}
              {expandedQuiz === quiz.id && (
                <div className={styles.quizBody}>
                  {quiz.perguntas && quiz.perguntas.length > 0 ? (
                    quiz.perguntas.map((perg, pIndex) => (
                      <div key={perg.id || pIndex} className={styles.questionBox}>
                        <p className={styles.enunciado}>
                          <strong>Q{pIndex + 1}:</strong> {perg.enunciado}
                        </p>
                        
                        <div className={styles.optionsGrid}>
                          {perg.alternativas && perg.alternativas.map((alt, aIndex) => (
                            <div 
                              key={alt.id || aIndex} 
                              className={`${styles.optionCard} ${alt.isCorreta ? styles.correct : ""}`}
                            >
                              <span>{alt.texto}</span>
                              {alt.isCorreta && <span className={styles.checkIcon}>✅</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className={styles.emptyState}>Este quiz não possui perguntas cadastradas.</p>
                  )}
                </div>
              )}

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default QuestionBank;