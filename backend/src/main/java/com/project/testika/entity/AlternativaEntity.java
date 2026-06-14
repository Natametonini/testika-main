package com.project.testika.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "alternativas")
public class AlternativaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String texto;

    @Column(nullable = false)
    private boolean isCorreta;

    @ManyToOne
    @JoinColumn(name = "pergunta_id", nullable = false)
    private PerguntaEntity pergunta;

    public AlternativaEntity() {}

    public AlternativaEntity(String texto, boolean isCorreta, PerguntaEntity pergunta) {
        this.texto = texto;
        this.isCorreta = isCorreta;
        this.pergunta = pergunta;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTexto() { return texto; }
    public void setTexto(String texto) { this.texto = texto; }

    public boolean isCorreta() { return isCorreta; }
    public void setCorreta(boolean isCorreta) { this.isCorreta = isCorreta; }

    public PerguntaEntity getPergunta() { return pergunta; }
    public void setPergunta(PerguntaEntity pergunta) { this.pergunta = pergunta; }
}