package com.project.testika.dto.request;

import java.util.List;

public class QuizRequest {
    private String titulo;
    private String materia;
    private Long criadorId; // O ID do usuário logado que vem do front
    private boolean isPublico;
    private List<PerguntaRequest> perguntas;

    public QuizRequest() {}

    // Getters e Setters
    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getMateria() { return materia; }
    public void setMateria(String materia) { this.materia = materia; }

    public Long getCriadorId() { return criadorId; }
    public void setCriadorId(Long criadorId) { this.criadorId = criadorId; }

    public boolean isPublico() { return isPublico; }
    public void setPublico(boolean isPublico) { this.isPublico = isPublico; }

    public List<PerguntaRequest> getPerguntas() { return perguntas; }
    public void setPerguntas(List<PerguntaRequest> perguntas) { this.perguntas = perguntas; }
}