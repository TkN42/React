import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <div>
        <a href="/" className='Home'>Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <nav>
        {/* Header ile ilgili diğer öğeler... */}
      </nav>
    </header>
  );
};

export default Header;
