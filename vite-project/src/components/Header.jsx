import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import logoImage from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme === 'dark' ? '#343a40' : '#f8f9fa'};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme === 'dark' ? '#FFF' : '#333'};
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme === 'dark' ? '#FFF' : '#007bff'};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <HeaderContainer theme={theme}>
      <Logo src={logoImage} alt="Logo" />
      <Title theme={theme}>Projeto Interfaces com React</Title>
      <Nav>
        <StyledLink to="/" theme={theme}>Home</StyledLink>
        <StyledLink to="/about" theme={theme}>About</StyledLink>
        {location.pathname !== '/about' && <ThemeToggle />}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
