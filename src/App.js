import React from 'react';
import './App.css';
import './styles/listCatalog.css'
import './styles/topCatalog.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCatalog from './components/BookCatalog';
//import BookHome from './components/BookHome';
import BookAbout from './components/BookAbout';
import BookNav from './components/BookNav';

const App = () => {
  return (
    <Router>
      <div>
        <BookNav />
        <Routes>
          <Route path="/" element={<BookCatalog />} />
          {/*<Route path="/catalog" element={<BookCatalog />} />*/}
          <Route path="/about" element={<BookAbout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;