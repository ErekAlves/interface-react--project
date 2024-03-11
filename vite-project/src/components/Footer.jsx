import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme === 'dark' ? '#FFF' : '#343a40'};
  position: fixed;
  left: 0;
  bottom: 0;
`;

const Footer = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer theme={theme}>
      © 2024 Minha Aplicação
    </FooterContainer>
  );
};

export default Footer;
