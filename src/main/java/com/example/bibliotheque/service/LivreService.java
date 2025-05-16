package com.example.bibliotheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibliotheque.model.Livre;
import com.example.bibliotheque.repository.LivreRepository;

@Service
public class LivreService {

    @Autowired
    private LivreRepository livreRepository;

    public List<Livre> findAll() {
        return livreRepository.findAll();
    }

    public Livre findById(Long id) {
        return livreRepository.findById(id).orElseThrow(() -> new RuntimeException("Livre non trouvé"));
    }

    public List<Livre> findDisponibles() {
        return livreRepository.findByDisponibleTrue();
    }
}
