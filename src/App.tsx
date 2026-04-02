import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Vets from './pages/Vets';
import Appointment from './pages/Appointment';
import AIAssistantPage from './pages/AIAssistantPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vets" element={<Vets />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
