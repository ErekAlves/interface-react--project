import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme === 'dark' ? '#343a40' : '#343a40'};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 15px;
  padding: 8px;
  width: 85%;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 40%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MyForm = () => {
  const { theme } = useTheme();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.nome = nome ? '' : 'Nome não pode ser vazio';
    tempErrors.sobrenome = sobrenome ? '' : 'Sobrenome não pode ser vazio';
    tempErrors.email = email ? (emailRegex.test(email) ? '' : 'Email inválido') : 'Email não pode ser vazio';
    tempErrors.nome = !/\d/.test(nome) ? tempErrors.nome : 'Nome não pode conter números';
    tempErrors.sobrenome = !/\d/.test(sobrenome) ? tempErrors.sobrenome : 'Sobrenome não pode conter números';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    setShowErrors(true);
    if (Object.keys(formErrors).every((key) => formErrors[key] === '')) {
      console.log('Formulário válido, enviar dados...');
    }
  };

  return (
    <Container>
      <FormContainer theme={theme} onSubmit={handleSubmit}>
        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <ErrorMessage show={showErrors}>{errors.nome}</ErrorMessage>
        <Input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
        <ErrorMessage show={showErrors}>{errors.sobrenome}</ErrorMessage>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <ErrorMessage show={showErrors}>{errors.email}</ErrorMessage>
        <Button type="submit">Enviar</Button>
      </FormContainer>
    </Container>
  );
};

export default MyForm;
