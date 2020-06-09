import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
