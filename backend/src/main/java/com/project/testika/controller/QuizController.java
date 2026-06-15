package com.project.testika.controller;

import com.project.testika.dto.request.QuizRequest;
import com.project.testika.dto.response.QuizResponse;
import com.project.testika.dto.response.PerguntaResponse;
import com.project.testika.dto.response.AlternativaResponse;
import com.project.testika.entity.QuizEntity;
import com.project.testika.entity.PerguntaEntity;
import com.project.testika.entity.AlternativaEntity;
import com.project.testika.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/criar")
    public ResponseEntity<?> criar(@RequestBody QuizRequest request) {
        try {
            QuizEntity novoQuiz = quizService.criarQuiz(request);
            return ResponseEntity.ok(converterParaResponse(novoQuiz));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/publicos")
    public ResponseEntity<List<QuizResponse>> listarPublicos() {
        List<QuizEntity> quizzes = quizService.listarPublicos();
        List<QuizResponse> responseList = new ArrayList<>();
        for (QuizEntity q : quizzes) {
            responseList.add(converterParaResponse(q));
        }
        return ResponseEntity.ok(responseList);
    }

    @GetMapping("/criador/{criadorId}")
    public ResponseEntity<List<QuizResponse>> listarPorCriador(@PathVariable Long criadorId) {
        List<QuizEntity> quizzes = quizService.listarPorCriador(criadorId);
        List<QuizResponse> responseList = new ArrayList<>();
        for (QuizEntity q : quizzes) {
            responseList.add(converterParaResponse(q));
        }
        return ResponseEntity.ok(responseList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) {
        try {
            QuizEntity quiz = quizService.buscarPorId(id);
            return ResponseEntity.ok(converterParaResponse(quiz));
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id, @RequestParam Long usuarioId) {
        try {
            quizService.deletarQuiz(id, usuarioId);
            return ResponseEntity.ok("Quiz deletado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // MÉTODO HELPER: Converte a Entity cheia de relacionamentos para o DTO limpo (Quebra o Loop)
    private QuizResponse converterParaResponse(QuizEntity quiz) {
        List<PerguntaResponse> pResponses = new ArrayList<>();

        for (PerguntaEntity p : quiz.getPerguntas()) {
            List<AlternativaResponse> aResponses = new ArrayList<>();
            for (AlternativaEntity a : p.getAlternativas()) {
                aResponses.add(new AlternativaResponse(a.getId(), a.getTexto(), a.isCorreta()));
            }
            pResponses.add(new PerguntaResponse(p.getId(), p.getEnunciado(), aResponses));
        }

        return new QuizResponse(
                quiz.getId(),
                quiz.getTitulo(),
                quiz.getMateria(),
                quiz.getCriador().getId(),
                quiz.isPublico(),
                pResponses
        );
    }
}