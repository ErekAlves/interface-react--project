import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
