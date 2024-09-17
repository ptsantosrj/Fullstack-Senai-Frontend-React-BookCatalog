import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="bookList">
      {books.length === 0 ? (
        <p>Nenhum livro disponível</p>
      ) : (
        books.map((book, index) => (
          <BookItem
            key={index}
            book={book}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default BookList;
