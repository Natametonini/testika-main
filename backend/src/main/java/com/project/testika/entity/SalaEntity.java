package com.project.testika.entity;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "salas")
public class SalaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String pin;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private QuizEntity quiz;

    @Column(nullable = false)
    private String status = "AGUARDANDO"; // AGUARDANDO, JOGANDO, FINALIZADO

    @OneToMany(mappedBy = "sala", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<JogadorEntity> jogadores = new ArrayList<>();

    public SalaEntity() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPin() { return pin; }
    public void setPin(String pin) { this.pin = pin; }

    public QuizEntity getQuiz() { return quiz; }
    public void setQuiz(QuizEntity quiz) { this.quiz = quiz; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public List<JogadorEntity> getJogadores() { return jogadores; }
    public void setJogadores(List<JogadorEntity> jogadores) { this.jogadores = jogadores; }
    
}