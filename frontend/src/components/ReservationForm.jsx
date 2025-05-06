import React, { useState } from 'react';
import { reserveBook } from '../services/soap';

const ReservationForm = () => {
  const [bookId, setBookId] = useState('');
  const [period, setPeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await reserveBook(bookId, period);
    alert('Réservation effectuée avec succès!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Réserver un Livre</h2>
      <div>
        <label>ID du Livre:</label>
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
      </div>
      <div>
        <label>Période:</label>
        <input type="text" value={period} onChange={(e) => setPeriod(e.target.value)} required />
      </div>
      <button type="submit">Réserver</button>
    </form>
  );
};

export default ReservationForm;
