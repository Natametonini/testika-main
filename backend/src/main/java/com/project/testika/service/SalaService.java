package com.project.testika.service;

import com.project.testika.entity.SalaEntity;
import com.project.testika.entity.JogadorEntity;
import com.project.testika.entity.QuizEntity;
import com.project.testika.entity.PerguntaEntity;
import com.project.testika.repository.SalaRepository;
import com.project.testika.repository.JogadorRepository;
import com.project.testika.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class SalaService {

    @Autowired
    private SalaRepository salaRepository;

    @Autowired
    private JogadorRepository jogadorRepository;

    @Autowired
    private QuizRepository quizRepository;

    // 1. Cria a sala gerando um PIN aleatório de 6 dígitos
    public SalaEntity criarSala(Long quizId) {
        QuizEntity quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new RuntimeException("Quiz não encontrado!"));

        String pin = String.format("%06d", new Random().nextInt(999999));

        SalaEntity sala = new SalaEntity();
        sala.setPin(pin);
        sala.setQuiz(quiz);

        return salaRepository.save(sala);
    }

    // 2. Entra na sala e EMBARALHA as perguntas para esse jogador específico
    public JogadorEntity entrarNaSala(String pin, String nickname) {
        SalaEntity sala = salaRepository.findByPin(pin)
                .orElseThrow(() -> new RuntimeException("Sala não encontrada com este PIN!"));

        if (!sala.getStatus().equals("AGUARDANDO")) {
            throw new RuntimeException("Esta partida já começou ou foi encerrada!");
        }

        // Pega todos os IDs das perguntas do Quiz da sala
        List<Long> idsPerguntas = new ArrayList<>();
        for (PerguntaEntity p : sala.getQuiz().getPerguntas()) {
            idsPerguntas.add(p.getId());
        }

        // EMBARALHA a lista de IDs
        Collections.shuffle(idsPerguntas);

        // Transforma a lista [3, 1, 4] em texto "3,1,4" para salvar no banco
        String ordemTexto = idsPerguntas.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(","));

        JogadorEntity jogador = new JogadorEntity();
        jogador.setNickname(nickname);
        jogador.setSala(sala);
        jogador.setOrdemPerguntas(ordemTexto); // Salva a ordem única dele

        return jogadorRepository.save(jogador);
    }
    
    public boolean responderPergunta(com.project.testika.dto.request.RespostaRequest request) {
        JogadorEntity jogador = jogadorRepository.findById(request.getJogadorId())
                .orElseThrow(() -> new RuntimeException("Jogador não encontrado!"));

        // Busca a pergunta para garantir que ela existe
        salaRepository.findById(jogador.getSala().getId()); 

        // Encontra a alternativa escolhida dentro das alternativas da pergunta
        boolean correta = false;
        boolean alternativaValida = false;

        for (com.project.testika.entity.PerguntaEntity p : jogador.getSala().getQuiz().getPerguntas()) {
            if (p.getId().equals(request.getPerguntaId())) {
                for (com.project.testika.entity.AlternativaEntity a : p.getAlternativas()) {
                    if (a.getId().equals(request.getAlternativaId())) {
                        alternativaValida = true;
                        if (a.isCorreta()) {
                            correta = true;
                        }
                        break;
                    }
                }
            }
        }

        if (!alternativaValida) {
            throw new RuntimeException("Esta alternativa não pertence a esta pergunta!");
        }

        // Se acertou, soma os pontos no banco de dados
        if (correta) {
            jogador.setPontuacao(jogador.getPontuacao() + 10); // 10 pontos por acerto
            jogadorRepository.save(jogador);
        }

        return correta; // Retorna true se acertou e false se errou para o front mostrar o feedback visual
    }
    
    // Atualizar a tela de jogadores da Sala
    public SalaEntity buscarPorPin(String pin) {
        return salaRepository.findByPin(pin)
                .orElseThrow(() -> new RuntimeException("Sala com o código " + pin + " não foi encontrada!"));
    }
}