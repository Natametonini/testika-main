package com.project.testika.dto.response;

public class JogadorResponse {
    private Long id;
    private String nickname;
    private int pontuacao;
    private String ordemPerguntas;

    public JogadorResponse() {}

    public JogadorResponse(Long id, String nickname, int pontuacao, String ordemPerguntas) {
        this.id = id;
        this.nickname = nickname;
        this.pontuacao = pontuacao;
        this.ordemPerguntas = ordemPerguntas;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }

    public int getPontuacao() { return pontuacao; }
    public void setPontuacao(int pontuacao) { this.pontuacao = pontuacao; }

    public String getOrdemPerguntas() { return ordemPerguntas; }
    public void setOrdemPerguntas(String ordemPerguntas) { this.ordemPerguntas = ordemPerguntas; }
}