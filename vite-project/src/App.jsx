import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CadastroPage from './pages/CadastroPage';
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RequireAuth from './components/RequireAuth';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <GlobalContent />
      </Router>
    </ThemeProvider>
  );
};

const GlobalContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/home" 
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          } 
        />
        <Route 
          path="/about" 
          element={
            <RequireAuth>
              <AboutPage />
            </RequireAuth>
          } 
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
