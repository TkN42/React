import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header({ onChangePage }) {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container header">
        <Navbar.Brand style={{ color: '#aaa' }} href="/">Ana Sayfa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => onChangePage('temperature')}>Sıcaklık Çevirici</Nav.Link>
            <Nav.Link onClick={() => onChangePage('weight')}>Ağırlık Çevirici</Nav.Link>
            <Nav.Link onClick={() => onChangePage('length')}>Uzunluk Çevirici</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
