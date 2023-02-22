import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Pricing, About, Contact, Header, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
