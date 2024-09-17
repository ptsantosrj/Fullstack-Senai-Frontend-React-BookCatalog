import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import { addOrUpdateBook, editBook, deleteBook } from '../services/actions';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [presentBook, setPresentBook] = useState({ title: '', author: '', year: '', description: '' });

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) setBooks(storedBooks);
  }, []);

   useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddOrUpdateBook = (book) => {
    addOrUpdateBook(book, books, setBooks, editIndex, setEditIndex, setPresentBook);
  };

  const handleEditBook = (index) => {
    editBook(index, books, setPresentBook, setEditIndex);
  };

  const handleDeleteBook = (index) => {
    deleteBook(index, books, setBooks);
  };

  return (
    <div className="container">
      <h1>Catalogo de Livros</h1>
      <BookForm
        presentBook={presentBook}
        addOrUpdateBook={handleAddOrUpdateBook}
        editIndex={editIndex}
      />
      <BookList
        books={books}
        onEdit={handleEditBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
};

export default BookCatalog;
