package com.project.testika.dto.response;

import java.util.List;

public class SalaResponse {
    private Long id;
    private String pin;
    private String status;
    private Long quizId;
    private List<JogadorResponse> jogadores;

    public SalaResponse() {}

    public SalaResponse(Long id, String pin, String status, Long quizId, List<JogadorResponse> jogadores) {
        this.id = id;
        this.pin = pin;
        this.status = status;
        this.quizId = quizId;
        this.jogadores = jogadores;
    }

    // Getters e Setters
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
}