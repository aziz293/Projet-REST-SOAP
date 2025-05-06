import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReservationStatus } from '../services/api';

const ReservationStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchReservationStatus = async () => {
      const data = await getReservationStatus(id);
      setStatus(data);
    };

    fetchReservationStatus();
  }, [id]);

  if (!status) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>Statut de la Réservation</h2>
      <p>ID de la Réservation: {status.id}</p>
      <p>Statut: {status.status}</p>
    </div>
  );
};

export default ReservationStatus;
