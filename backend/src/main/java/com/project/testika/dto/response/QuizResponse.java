package com.project.testika.dto.response;

import java.util.List;

public class QuizResponse {
    private Long id;
    private String titulo;
    private String materia;
    private Long criadorId;
    private boolean isPublico;
    private List<PerguntaResponse> perguntas;

    public QuizResponse() {}

    public QuizResponse(Long id, String titulo, String materia, Long criadorId, boolean isPublico, List<PerguntaResponse> perguntas) {
        this.id = id;
        this.titulo = titulo;
        this.materia = materia;
        this.criadorId = criadorId;
        this.isPublico = isPublico;
        this.perguntas = perguntas;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getMateria() { return materia; }
    public void setMateria(String materia) { this.materia = materia; }

    public Long getCriadorId() { return criadorId; }
    public void setCriadorId(Long criadorId) { this.criadorId = criadorId; }

    public boolean isPublico() { return isPublico; }
    public void setPublico(boolean isPublico) { this.isPublico = isPublico; }

    public List<PerguntaResponse> getPerguntas() { return perguntas; }
    public void setPerguntas(List<PerguntaResponse> perguntas) { this.perguntas = perguntas; }
}