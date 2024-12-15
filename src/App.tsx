import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import './assets/fonts/fonts.css';

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="YOUR_RECAPTCHA_SITE_KEY"
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <Router>
        <div className="min-h-screen font-inter">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Features />
                  <Pricing />
                  <ContactForm />
                </>
              }
            />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;
