import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg'; // Ensure the logo exists

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 350px;
  padding: 15px 20px;
  background-color: rgba(40, 44, 52, 0.9); /* Slight transparency */
  font-family: 'Poppins', sans-serif;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Smooth background blur */

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 250px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    @media (max-width: 1024px) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 20px;
      background-color: #282c34;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media (max-width: 1024px) {
    display: block;
  }
`;

// Added Wrapper to Push Content Below Fixed Header
const PageContent = styled.div`
  margin-top: 80px; /* Adjust based on header height */
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="logo" />
        <Hamburger onClick={toggleNav}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </Hamburger>
        <Nav isOpen={isOpen}>
          <ul>
            <li><Link to="/" onClick={toggleNav}>Home</Link></li>
            <li><Link to="/about" onClick={toggleNav}>About</Link></li>
            <li><Link to="/menu" onClick={toggleNav}>Menu</Link></li>
            <li><Link to="/location" onClick={toggleNav}>Location</Link></li>
            <li><Link to="/testimonials" onClick={toggleNav}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
          </ul>
        </Nav>
      </HeaderContainer>

      {/* Wrapper to Ensure Content Starts Below Fixed Header */}
      <PageContent>
        {/* Your page content goes here */}
      </PageContent>
    </>
  );
}

export default Header;
