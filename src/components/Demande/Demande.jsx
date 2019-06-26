import React, { Component } from 'react';
import './effect.css';

class Demande extends Component {

    render() { 
        return ( 
            <div className="grid">
                <figure className="effect-sadie">
                    <img src="https://picsum.photos/640/360" alt="img02" />
                    <figcaption>
                        <h2>Titre</h2>
                        <p>Sadie never took her eyes off me. She had a dark soul.</p>
                        <a href="#demande">View more</a>
                    </figcaption>
                </figure>
            </div>

         );
    }
}
 
export default Demande;