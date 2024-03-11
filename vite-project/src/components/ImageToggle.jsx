import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';
import lampOn from '../assets/images/lamp-on.png';
import lampOff from '../assets/images/lamp-off.png';
import lampBroken from '../assets/images/lamp-broken.png';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Image = styled.img`
  height: 300px;;
  width: auto;
  margin: 10px 0;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const WarningMessage = styled.p`
  color: #d9534f;
  margin: 10px 0;
`;

const ThemeToggleWithImage = () => {
  const { theme, toggleTheme } = useTheme();
  const [lampState, setLampState] = useState('off');
  const [warning, setWarning] = useState("Atenção! Não clique na lâmpada.");

  useEffect(() => {
    if (lampState === 'on' && theme !== 'dark') {
      toggleTheme();
    } else if ((lampState === 'off' || lampState === 'broken') && theme !== 'light') {
      toggleTheme();
    }
  }, [lampState, theme, toggleTheme]);

  const handleImageClick = () => {
    setLampState('broken');
    setWarning("Você é teimoso, né? Atualize a página para consertar a lâmpada.");
  };

  const handleButtonClick = () => {
    if (lampState === 'broken') {
      window.location.reload();
      return;
    }

    const newState = lampState === 'off' ? 'on' : 'off';
    setLampState(newState);
    toggleTheme();
    setWarning("Atenção! Não clique na lâmpada.");
  };

  const getImageSrc = () => {
    switch (lampState) {
      case 'on': return lampOn;
      case 'off': return lampOff;
      case 'broken': return lampBroken;
      default: return lampOff;
    }
  };

  const getButtonLabel = () => {
    switch (lampState) {
      case 'on': return 'Desligada';
      case 'off': return 'Ligada';
      case 'broken': return 'Reset';
      default: return 'Ligada';
    }
  };

  return (
    <Container>
      {<WarningMessage>{warning}</WarningMessage>}
      <Image src={getImageSrc()} alt="Lâmpada" onClick={handleImageClick} />
      <Button onClick={handleButtonClick}>{getButtonLabel()}</Button>
    </Container>
  );
};

export default ThemeToggleWithImage;
