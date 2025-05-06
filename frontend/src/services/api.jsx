import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Remplacez par l'URL de votre API REST

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/livres`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    throw error;
  }
};

export const getBookDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/livres/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du livre:', error);
    throw error;
  }
};

export const getReservationStatus = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/reservations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du statut de la réservation:', error);
    throw error;
  }
};
