package com.project.testika.dto.request;

public class RespostaRequest {
    private Long jogadorId;
    private Long perguntaId;
    private Long alternativaId;

    public RespostaRequest() {}

    public Long getJogadorId() { return jogadorId; }
    public void setJogadorId(Long jogadorId) { this.jogadorId = jogadorId; }

    public Long getPerguntaId() { return perguntaId; }
    public void setPerguntaId(Long perguntaId) { this.perguntaId = perguntaId; }

    public Long getAlternativaId() { return alternativaId; }
    public void setAlternativaId(Long alternativaId) { this.alternativaId = alternativaId; }
}