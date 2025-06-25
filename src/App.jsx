import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;