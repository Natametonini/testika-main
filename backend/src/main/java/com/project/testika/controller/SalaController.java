package com.project.testika.controller;

import com.project.testika.dto.response.SalaResponse;
import com.project.testika.dto.response.JogadorResponse;
import com.project.testika.entity.SalaEntity;
import com.project.testika.entity.JogadorEntity;
import com.project.testika.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/api/salas")
@CrossOrigin(origins = "*")
public class SalaController {

    @Autowired
    private SalaService salaService;

    // Rota para o Professor abrir a sala para um Quiz específico
    @PostMapping("/criar/{quizId}")
    public ResponseEntity<?> criarSala(@PathVariable Long quizId) {
        try {
            SalaEntity sala = salaService.criarSala(quizId);
            return ResponseEntity.ok(converterParaSalaResponse(sala));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Rota para o Aluno entrar usando PIN e Nickname
    @PostMapping("/entrar/{pin}")
    public ResponseEntity<?> entrarNaSala(@PathVariable String pin, @RequestBody Map<String, String> body) {
        try {
            String nickname = body.get("nickname");
            JogadorEntity jogador = salaService.entrarNaSala(pin, nickname);
            
            JogadorResponse response = new JogadorResponse(
                    jogador.getId(),
                    jogador.getNickname(),
                    jogador.getPontuacao(),
                    jogador.getOrdemPerguntas()
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Método helper para quebrar loops de serialização do JSON
    private SalaResponse converterParaSalaResponse(SalaEntity sala) {
        List<JogadorResponse> jResponses = new ArrayList<>();
        if (sala.getJogadores() != null) {
            for (JogadorEntity j : sala.getJogadores()) {
                jResponses.add(new JogadorResponse(j.getId(), j.getNickname(), j.getPontuacao(), j.getOrdemPerguntas()));
            }
        }
        return new SalaResponse(
                sala.getId(),
                sala.getPin(),
                sala.getStatus(),
                sala.getQuiz().getId(),
                jResponses
        );
    }
    
    @PostMapping("/responder")
    public ResponseEntity<?> responder(@RequestBody com.project.testika.dto.request.RespostaRequest request) {
        try {
            boolean acertou = salaService.responderPergunta(request);
            if (acertou) {
                return ResponseEntity.ok("Resposta CORRETA! Pontuação atualizada.");
            } else {
                return ResponseEntity.ok("Resposta INCORRETA! Pontuação mantida.");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @GetMapping("/{code}/jogadores")
    public ResponseEntity<List<JogadorEntity>> obterJogadoresdaSala(@PathVariable String code) {
        // Busca a sala pelo PIN, pega a lista de jogadores dela e retorna
        List<JogadorEntity> jogadores = salaService.buscarPorPin(code).getJogadores();
        return ResponseEntity.ok(jogadores);
    }
}