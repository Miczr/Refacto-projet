import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Accueil from './components/Accueil';
import About from './components/About';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Section from './components/Section';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Route path="/" exact component={Accueil}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Projets" exact component={Projets}/>
        <Route path="/Contact" exact component={Contact}/>
      </Router>
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
