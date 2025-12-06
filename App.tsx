
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import AIConsultantPage from './pages/AIConsultantPage'; // Import the new AI Consultant Page

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-secondary">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ai-consultant" element={<AIConsultantPage />} /> {/* Add new route for AI Consultant */}
            <Route path="/contacts" element={<ContactsPage />} />
            {/* Future routes can be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;