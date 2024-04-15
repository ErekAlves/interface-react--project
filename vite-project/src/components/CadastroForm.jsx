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
  margin-top: 20px;
  padding: 8px 16px;
  width: 40%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const CadastroForm = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const validateForm = useCallback(() => {
    let tempErrors = {};
    tempErrors.nome = nome ? '' : 'Nome não pode ser vazio';
    tempErrors.sobrenome = sobrenome ? '' : 'Sobrenome não pode ser vazio';
    tempErrors.email = email ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? '' : 'Email inválido' : 'Email não pode ser vazio';
    tempErrors.senha = senha ? '' : 'Senha não pode ser vazia';
    tempErrors.confirmaSenha = (senha && confirmaSenha && senha === confirmaSenha) ? '' : 'Senhas não conferem';
    return tempErrors;
  }, [nome, sobrenome, email, senha, confirmaSenha]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    setShowErrors(true);
    if (Object.keys(formErrors).every((key) => formErrors[key] === '')) {
      sessionStorage.setItem('registeredUser', JSON.stringify({ nome, sobrenome, email, senha }));
      alert('Cadastro realizado com sucesso. Por favor, faça login.');
      navigate('/login');
    }
  }, [validateForm, navigate]);

  return (
    <Container>
      <FormContainer theme={theme}>
        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <ErrorMessage show={showErrors}>{errors.nome}</ErrorMessage>
        <Input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
        <ErrorMessage show={showErrors}>{errors.sobrenome}</ErrorMessage>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <ErrorMessage show={showErrors}>{errors.email}</ErrorMessage>
        <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
        <ErrorMessage show={showErrors}>{errors.senha}</ErrorMessage>
        <Input type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} placeholder="Confirmar Senha" />
        <ErrorMessage show={showErrors}>{errors.confirmaSenha}</ErrorMessage>
        <Button type="submit" onClick={handleSubmit}>Cadastrar</Button>
      </FormContainer>
    </Container>
  );
};

export default React.memo(CadastroForm);
