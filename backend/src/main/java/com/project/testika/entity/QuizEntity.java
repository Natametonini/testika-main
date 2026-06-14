package com.project.testika.entity;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "quizzes")
public class QuizEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String materia; // Ex: Matemática, História

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private UsuarioEntity criador;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PerguntaEntity> perguntas = new ArrayList<>();

    @Column(nullable = false)
    private boolean isPublico = false; // true = banco geral, false = local/privado

    public QuizEntity() {}

    public QuizEntity(String titulo, String materia, UsuarioEntity criador, boolean isPublico) {
        this.titulo = titulo;
        this.materia = materia;
        this.criador = criador;
        this.isPublico = isPublico;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getMateria() { return materia; }
    public void setMateria(String materia) { this.materia = materia; }

    public UsuarioEntity getCriador() { return criador; }
    public void setCriador(UsuarioEntity criador) { this.criador = criador; }

    public List<PerguntaEntity> getPerguntas() { return perguntas; }
    public void setPerguntas(List<PerguntaEntity> perguntas) { this.perguntas = perguntas; }

    public boolean isPublico() { return isPublico; }
    public void setPublico(boolean isPublico) { this.isPublico = isPublico; }
}