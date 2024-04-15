import React, { useState } from 'react';
import styled from 'styled-components';

const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; 
  width: 100vw; 
  background-color: #f0f0f0; 
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  width: 350px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
      setImageUrl('');
    }
  };

  return (
    <FullPageContainer>
      <Card>
        <h2>Imagem de Cão Aleatória</h2>
        {imageUrl && <Image src={imageUrl} alt="Random Dog" />}
        <Button onClick={fetchDogImage}>Buscar Nova Imagem</Button>
      </Card>
    </FullPageContainer>
  );
}

export default DogImage;
