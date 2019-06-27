import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Top5 from './components/Top5/Top5';
import NewIn from './components/newProj/NewIn';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <Nav/>
      <Header/>
        <section className="page-section" id="topDemandes">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Top demandes</h2>
                <h3 className="section-subheading text-muted">Les demandes les plus visitées</h3>
              </div>
            </div>
            
            <div>
                <Top5/>
            </div>
            </div>
        </section>

        <section className="page-section" id="newIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Nouvelles demandes</h2>
                <h3 className="section-subheading text-muted">Les demandes qui vient d'être créé</h3>
              </div>
            </div>
            
            <div>
                <NewIn/>
            </div>
            </div>
        </section>
        <AboutUs/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
