import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

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
  height: auto;  
  background-color: ${({ theme }) => theme === 'dark' ? '#343a40' : '#f8f9fa'};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 10px;
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
  margin-top: 10px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const LoginForm = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const validateForm = useCallback(() => {
    const user = sessionStorage.getItem('registeredUser');
    const userInfo = user ? JSON.parse(user) : null;

    if (!userInfo || userInfo.email !== email || userInfo.senha !== password) {
      return false;
    }
    return true;
  }, [email, password]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError('Usuário não cadastrado ou senha incorreta.');
      setShowError(true);
    } else {
      sessionStorage.setItem('user', JSON.stringify({email, password})); 
      setShowError(false);
      navigate('/home');  
    }
  }, [validateForm, navigate]);

  
  const handleGoToRegister = () => {
    navigate('/');
  };

  return (
    <Container>
      <FormContainer theme={theme} onSubmit={handleSubmit}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
        <Button type="submit">Login</Button>
        <Button onClick={handleGoToRegister}>Cadastrar</Button>
        {showError && <ErrorMessage show={showError}>{error}</ErrorMessage>}
      </FormContainer>
    </Container>
  );
};

export default React.memo(LoginForm);
