package com.project.testika.dto.response;

public class AlternativaResponse {
    private Long id;
    private String texto;
    private boolean isCorreta;

    public AlternativaResponse() {}

    public AlternativaResponse(Long id, String texto, boolean isCorreta) {
        this.id = id;
        this.texto = texto;
        this.isCorreta = isCorreta;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTexto() { return texto; }
    public void setTexto(String texto) { this.texto = texto; }

    public boolean isCorreta() { return isCorreta; }
    public void setCorreta(boolean isCorreta) { this.isCorreta = isCorreta; }
}