import React from 'react';
import { Link } from 'react-router-dom';

const BookNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        {/*<li><Link to="/catalog">Catálogo de Livros</Link></li>*/}
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
};

export default BookNavbar;
