package com.project.testika.service;

import com.project.testika.dto.request.QuizRequest;
import com.project.testika.dto.request.PerguntaRequest;
import com.project.testika.dto.request.AlternativaRequest;
import com.project.testika.entity.QuizEntity;
import com.project.testika.entity.PerguntaEntity;
import com.project.testika.entity.AlternativaEntity;
import com.project.testika.entity.UsuarioEntity;
import com.project.testika.repository.QuizRepository;
import com.project.testika.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public QuizEntity criarQuiz(QuizRequest request) {
        UsuarioEntity criador = usuarioRepository.findById(request.getCriadorId())
                .orElseThrow(() -> new RuntimeException("Usuário criador não encontrado!"));

        // Regra de negócio: Apenas professores podem alimentar o banco de questões geral (público)
        if (request.isPublico() && !criador.getTipoUsuario().equals("PROFESSOR")) {
            throw new RuntimeException("Apenas professores podem publicar quizzes no banco geral!");
        }

        // Instancia o Quiz principal
        QuizEntity quiz = new QuizEntity();
        quiz.setTitulo(request.getTitulo());
        quiz.setMateria(request.getMateria());
        quiz.setCriador(criador);
        quiz.setPublico(request.isPublico());

        // Mapeia as Perguntas e suas respectivas Alternativas
        for (PerguntaRequest pReq : request.getPerguntas()) {
            PerguntaEntity pergunta = new PerguntaEntity();
            pergunta.setEnunciado(pReq.getEnunciado());
            pergunta.setQuiz(quiz); // Vincula a pergunta ao quiz atual

            for (AlternativaRequest aReq : pReq.getAlternativas()) {
                AlternativaEntity alternativa = new AlternativaEntity();
                alternativa.setTexto(aReq.getTexto());
                alternativa.setCorreta(aReq.isCorreta());
                alternativa.setPergunta(pergunta); // Vincula a alternativa à pergunta atual
                
                pergunta.getAlternativas().add(alternativa);
            }
            quiz.getPerguntas().add(pergunta);
        }

        return quizRepository.save(quiz); // Salva tudo em cascata de uma vez só!
    }

    public List<QuizEntity> listarPublicos() {
        return quizRepository.findByIsPublicoTrue();
    }

    public List<QuizEntity> listarPorCriador(Long criadorId) {
        return quizRepository.findByCriadorId(criadorId);
    }

    public QuizEntity buscarPorId(Long id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quiz não encontrado!"));
    }

    public void deletarQuiz(Long quizId, Long usuarioId) {
        // 1. Busca o quiz. Se não existir, o método buscarPorId já joga o erro 404
        QuizEntity quiz = buscarPorId(quizId);

        // 2. Valida se o ID do criador do quiz bate com o ID de quem está tentando deletar
        if (!quiz.getCriador().getId().equals(usuarioId)) {
            throw new RuntimeException("Você não tem permissão para deletar este quiz, pois você não é o criador dele!");
        }

        // 3. Se passou pela validação, deleta com segurança
        quizRepository.delete(quiz);
    }
}