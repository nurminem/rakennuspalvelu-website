import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Vierittää ylös reitin vaihtuessa */}
      <div className="App"> 
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palvelut" element={<Services />} />
            <Route path="/referenssit" element={<References />} />
            <Route path="/yhteystiedot" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
