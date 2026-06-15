package com.project.testika.dto.request;

import java.util.List;

public class PerguntaRequest {
    private String enunciado;
    private List<AlternativaRequest> alternativas;

    public PerguntaRequest() {}

    public String getEnunciado() { return enunciado; }
    public void setEnunciado(String enunciado) { this.enunciado = enunciado; }

    public List<AlternativaRequest> getAlternativas() { return alternativas; }
    public void setAlternativas(List<AlternativaRequest> alternativas) { this.alternativas = alternativas; }
}