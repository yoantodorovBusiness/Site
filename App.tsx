import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/pages.css';

const App: React.FC = () => (
  <div className="app-root">
    <Nav />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} KaCert — Всички права запазени.</p>
      </div>
    </footer>
  </div>
);

export default App;
