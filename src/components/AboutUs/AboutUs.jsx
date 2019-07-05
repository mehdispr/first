import React, { Component } from 'react';

class AboutUs extends Component {
    styles={
        backgroundColor : 'red'
    }
    state = { }
    render() { 
        return ( 
            <React.Fragment>
                <section className="bg-light page-section" id="aboutUs">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">A propos</h2>
                            <h3 className="section-subheading text-muted">C'est quoi Saver ?</h3>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Dans la direction de réunir la société et revivre l'esprit de philanthropie entre les gens Saver est la premiere platforme au Maroc qui pour but bût de financer et collecter des fonds pour  nos clients. <br></br>Peu importe votre objectif que ça soit un reve d'enfance, un besoin ou votre projet de rêve Saver vous donnes la main et vous aides à l'achever</p>
                        </div>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-primary text-uppercase p-3 " >Essayer Saver</button>
                            {/* <Modal /> */}
                        </div>
                    </div>
                    </section>

            </React.Fragment>
         );
    }
}
 
export default AboutUs;