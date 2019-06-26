import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Top5 from './components/Demande/Top5';

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
    </div>
  );
}

export default App;
