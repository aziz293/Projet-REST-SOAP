package com.example.bibliotheque.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibliotheque.model.Reservation;
import com.example.bibliotheque.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation findById(Long id) {
        return reservationRepository.findById(id).orElseThrow(() -> new RuntimeException("Réservation non trouvée"));
    }

    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
