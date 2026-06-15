package com.project.testika.entity;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "perguntas")
public class PerguntaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 500)
    private String enunciado;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private QuizEntity quiz;

    @OneToMany(mappedBy = "pergunta", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AlternativaEntity> alternativas = new ArrayList<>();

    public PerguntaEntity() {}

    public PerguntaEntity(String enunciado, QuizEntity quiz) {
        this.enunciado = enunciado;
        this.quiz = quiz;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEnunciado() { return enunciado; }
    public void setEnunciado(String enunciado) { this.enunciado = enunciado; }

    public QuizEntity getQuiz() { return quiz; }
    public void setQuiz(QuizEntity quiz) { this.quiz = quiz; }

    public List<AlternativaEntity> getAlternativas() { return alternativas; }
    public void setAlternativas(List<AlternativaEntity> alternativas) { this.alternativas = alternativas; }
}