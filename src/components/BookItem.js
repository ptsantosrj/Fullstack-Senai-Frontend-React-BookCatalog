import React from 'react';

const BookItem = ({ book, index, onEdit, onDelete }) => {
    const handleEdit = (e) => {
        onEdit(index)
    }

    const handleDelete = (e) => {
        onDelete(index)
    }

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Ano:</strong> {book.year}</p>
      <p><strong>Descrição:</strong> {book.description}</p>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default BookItem;
