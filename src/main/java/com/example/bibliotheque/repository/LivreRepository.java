package com.example.bibliotheque.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bibliotheque.model.Livre;

public interface LivreRepository extends JpaRepository<Livre, Long> {
    List<Livre> findByDisponibleTrue();
}
