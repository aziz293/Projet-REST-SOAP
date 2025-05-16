package com.example.bibliotheque.soap;

import com.example.bibliotheque.soap.service.LivreSoapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class LivreSoapEndpoint {

    @Autowired
    private LivreSoapService livreSoapService;

    @PayloadRoot(namespace = "http://example.com/bibliotheque", localPart = "ajouterLivreRequest")
    @ResponsePayload
    public AjouterLivreResponse ajouterLivre(@RequestPayload AjouterLivreRequest request) {
        return livreSoapService.ajouterLivre(request);
    }
}
