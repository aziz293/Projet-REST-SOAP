package com.example.bibliotheque.soap;

public class AjouterLivreRequest {
    private String titre;
    private String auteur;

    // getters et setters
    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }
}
