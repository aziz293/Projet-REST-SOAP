import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Liste des Livres</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
