import React, { Component } from 'react';
import Demande from './Demande';

class NewIn extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            isLoading : true,
            projects:[]
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/projet/get/new')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.data.map(proj => (
            {
                titre : `${proj.titre}`,
                projet_id : `${proj.projet_id}`,
                montant : `${proj.montant}` ,
                categorie : `${proj.categorie}` ,
                restant : `${proj.restant}` 
            }
            )))
        .then(projects => this.setState({
            projects,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() { 
        return ( 
            <div class='content'>
                {
                   this.state.projects.map(proj => <Demande titre={proj.titre} id={proj.projet_id} imgUrl="https://picsum.photos/640/360" montant={proj.montant} restant={proj.restant}  cat={proj.categorie}/>)
                    
                }
            </div>
         );
    }
}
 
export default NewIn;