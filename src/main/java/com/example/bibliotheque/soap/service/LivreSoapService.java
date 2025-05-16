package com.example.bibliotheque.soap.service;

import com.example.bibliotheque.model.Livre;
import com.example.bibliotheque.repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bibliotheque.soap.AjouterLivreRequest;
import com.example.bibliotheque.soap.AjouterLivreResponse;


@Service
public class LivreSoapService {

    @Autowired
    private LivreRepository livreRepository;

    public AjouterLivreResponse ajouterLivre(AjouterLivreRequest request) {
        Livre livre = new Livre();
        livre.setTitre(request.getTitre());
        livre.setAuteur(request.getAuteur());
        livre.setDisponible(true);
        livreRepository.save(livre);

        AjouterLivreResponse response = new AjouterLivreResponse();
        response.setStatus("Livre ajouté avec succès");
        return response;
    }
}
