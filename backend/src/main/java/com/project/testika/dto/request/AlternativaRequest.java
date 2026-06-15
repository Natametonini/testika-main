package com.project.testika.dto.request;

public class AlternativaRequest {
    private String texto;
    private boolean isCorreta;

    public AlternativaRequest() {}

    public String getTexto() { return texto; }
    public void setTexto(String texto) { this.texto = texto; }

    public boolean isCorreta() { return isCorreta; }
    public void setCorreta(boolean isCorreta) { this.isCorreta = isCorreta; }
}