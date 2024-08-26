import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  cursor: pointer;
`;

const Header = () => {
  return (
    <NavBar>
      <Logo>Exclamatory Labs</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
