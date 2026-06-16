package com.project.testika.dto.response;

import java.util.List;
import com.project.testika.entity.PerguntaEntity; // 🚀 Garanta a importação da sua entidade de perguntas

public class SalaResponse {
    private Long id;
    private String pin;
    private String status;
    private Long quizId;
    private List<JogadorResponse> jogadores;
    private List<PerguntaEntity> perguntas; // 🚀 Novo atributo

    public SalaResponse() {}

    // Construtor atualizado
    public SalaResponse(Long id, String pin, String status, Long quizId, List<JogadorResponse> jogadores, List<PerguntaEntity> perguntas) {
        this.id = id;
        this.pin = pin;
        this.status = status;
        this.quizId = quizId;
        this.jogadores = jogadores;
        this.perguntas = perguntas;
    }

    // Getters e Setters antigos mantidos...
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPin() { return pin; }
    public void setPin(String pin) { this.pin = pin; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Long getQuizId() { return quizId; }
    public void setQuizId(Long quizId) { this.quizId = quizId; }

    public List<JogadorResponse> getJogadores() { return jogadores; }
    public void setJogadores(List<JogadorResponse> jogadores) { this.jogadores = jogadores; }

    // 🚀 Novos Getters e Setters
    public List<PerguntaEntity> getPerguntas() { return perguntas; }
    public void setPerguntas(List<PerguntaEntity> perguntas) { this.perguntas = perguntas; }
}