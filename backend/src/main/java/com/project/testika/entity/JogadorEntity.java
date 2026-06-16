package com.project.testika.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "jogadores")
public class JogadorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private int pontuacao = 0;

    @Column(nullable = false)
    private String ordemPerguntas; // Vai guardar os IDs misturados ex: "3,1,4,2"

    @ManyToOne
    @JoinColumn(name = "sala_id", nullable = false)
    @JsonIgnore
    private SalaEntity sala;

    public JogadorEntity() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }

    public int getPontuacao() { return pontuacao; }
    public void setPontuacao(int pontuacao) { this.pontuacao = pontuacao; }

    public String getOrdemPerguntas() { return ordemPerguntas; }
    public void setOrdemPerguntas(String ordemPerguntas) { this.ordemPerguntas = ordemPerguntas; }

    public SalaEntity getSala() { return sala; }
    public void setSala(SalaEntity sala) { this.sala = sala; }
}