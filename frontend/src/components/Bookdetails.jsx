import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const data = await getBookDetails(id);
      setBook(data);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Auteur: {book.author}</p>
      <p>Disponibilité: {book.available ? 'Disponible' : 'Indisponible'}</p>
    </div>
  );
};

export default BookDetails;
