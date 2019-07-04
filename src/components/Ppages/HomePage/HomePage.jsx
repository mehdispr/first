import React, { Component } from 'react';
import Header from '../../Header/Header';
import Nav from "../../Nav/Nav";
import Top5 from '../../Top5/Top6';
import NewIn from '../../newProj/NewIn';
import Contact from '../../Contact/Contact';
import Footer from "../../Footer/Footer";
import AboutUs from '../../AboutUs/AboutUs';

class HomePage extends Component {
    render() { 
        return ( 
            <React.Fragment>
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
            </React.Fragment>
         );
    }
}
 
export default HomePage;