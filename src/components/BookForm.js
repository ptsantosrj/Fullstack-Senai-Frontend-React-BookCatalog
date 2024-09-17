import React, { useState, useEffect } from 'react';

const BookForm = ({ presentBook, addOrUpdateBook, editIndex }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(presentBook.title);
    setAuthor(presentBook.author);
    setYear(presentBook.year);
    setDescription(presentBook.description);
  }, [presentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateBook({ title, author, year, description });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={handleTitle}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={handleAuthor}
        required
      />
      <input
        type="number"
        placeholder="Ano"
        value={year}
        onChange={handleYear}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={handleDescription}
        required
      ></textarea>
      <button type="submit">
        {editIndex !== null ? 'Atualizar livro' : 'Adicionar livro'}
      </button>
    </form>
  );
};

export default BookForm;
