package com.project.testika.dto.response;

import com.project.testika.enums.TipoPlano;

public class UsuarioResponse {
    private Long id;
    private String nome;
    private String email;
    private String tipoUsuario;
    private TipoPlano tipoPlano;

    public UsuarioResponse() {}

    public UsuarioResponse(Long id, String nome, String email, String tipoUsuario, TipoPlano tipoPlano) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
        this.tipoPlano = tipoPlano;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTipoUsuario() { return tipoUsuario; }
    public void setTipoUsuario(String tipoUsuario) { this.tipoUsuario = tipoUsuario; }

    public TipoPlano getTipoPlano() { return tipoPlano; }
    public void setTipoPlano(TipoPlano tipoPlano) { this.tipoPlano = tipoPlano; }
}