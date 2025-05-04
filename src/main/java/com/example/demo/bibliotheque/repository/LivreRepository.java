package com.example.demo.bibliotheque.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.bibliotheque.model.Livre;

@Repository
public interface LivreRepository extends JpaRepository<Livre, Long> {

    // Retourne les livres disponibles 
    List<Livre> findByDisponibleTrue();

    // Rechercher par titre 
    List<Livre> findByTitreContainingIgnoreCase(String titre);

    // Rechercher par auteur
    List<Livre> findByAuteurContainingIgnoreCase(String auteur);
}
