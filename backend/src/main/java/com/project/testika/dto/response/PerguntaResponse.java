package com.project.testika.dto.response;

import java.util.List;

public class PerguntaResponse {
    private Long id;
    private String enunciado;
    private List<AlternativaResponse> alternativas;

    public PerguntaResponse() {}

    public PerguntaResponse(Long id, String enunciado, List<AlternativaResponse> alternativas) {
        this.id = id;
        this.enunciado = enunciado;
        this.alternativas = alternativas;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEnunciado() { return enunciado; }
    public void setEnunciado(String enunciado) { this.enunciado = enunciado; }

    public List<AlternativaResponse> getAlternativas() { return alternativas; }
    public void setAlternativas(List<AlternativaResponse> alternativas) { this.alternativas = alternativas; }
}