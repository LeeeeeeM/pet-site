import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Vets = lazy(() => import('./pages/Vets'));
const Appointment = lazy(() => import('./pages/Appointment'));
const AIAssistantPage = lazy(() => import('./pages/AIAssistantPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="min-h-[40vh] flex items-center justify-center text-slate-500">
                页面加载中...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/vets" element={<Vets />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
