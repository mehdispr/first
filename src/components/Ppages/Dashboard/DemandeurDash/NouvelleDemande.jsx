import React, { Component } from 'react';

class NouvelleDemande extends Component {
    state = {  }
    render() { 
        return ( 
        <form className="form-horizontal">
            <fieldset>
                {/* Form Name */}
                <legend>Form Name</legend>
                {/* Text input*/}
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="titre">Titre</label>  
                <div className="col-md-4">
                    <input id="titre" name="titre" type="text" placeholder="titre" className="form-control input-md" required />
                    <span className="help-block">Titre du demande</span>  
                </div>
                </div>
                {/* Text input*/}
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="montant">Montant</label>  
                <div className="col-md-4">
                    <input id="montant" name="montant" type="text" placeholder="Montant" className="form-control input-md" required />
                    <span className="help-block">Montant necessaire</span>  
                </div>
                </div>
                {/* Select Basic */}
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="categorie">Categorie</label>
                <div className="col-md-4">
                    <select id="categorie" name="categorie" className="form-control">
                    <option value="sociale">sociale</option>
                    <option value="sport">sport</option>
                    <option value="economie">economie</option>
                    <option value="maladie">maladie</option>
                    </select>
                </div>
                </div>
                {/* File Button */} 
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="img">Image principale</label>
                <div className="col-md-4">
                    <input id="img" name="img" className="input-file" type="file" />
                </div>
                </div>
                {/* Textarea */}
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="description">Decription</label>
                <div className="col-md-4">                     
                    <textarea className="form-control" id="description" name="description" defaultValue={"Decription..."} />
                </div>
                </div>
            </fieldset>
            </form>

         );
    }
}
 
export default NouvelleDemande;