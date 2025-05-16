package com.example.bibliotheque.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bibliotheque.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
