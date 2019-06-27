import React, { Component } from 'react';
import './effect.css';

class Demande extends Component {

    render() { 
        return (
            <div className="grid">
                <figure className="effect-sadie">
                    <img src={this.props.imgUrl} alt="img02" />
                    <figcaption>
                        <h2>{this.props.titre}</h2>
                        <p> Categorie  : {this.props.cat}<br></br>
                            Necessaire : {this.props.montant} $<br></br>
                            Collecter  : {this.props.restant} $
                        
                        </p>
                        
                        <a href={'#'+this.props.id}>View more</a>
                    </figcaption>
                </figure>
            </div>

         );
    }
}
 
export default Demande;