import React, { Component, Fragment } from 'react';
import Demande from '../Demande/Demande';
import './effect.css';

class NewIn extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            isLoading : true,
            projects:[]
        }
    }
    refesh = () =>{
        window.location.replace('/search')
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
                restant : `${proj.restant}` ,
                description : proj.description,
                date_fin : proj.date_fin,
                prR : (((proj.montant - proj.restant)/proj.montant)*100),
                img : "https://picsum.photos/640/360"
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
            <Fragment>
            <div className='content'>
                {
                   this.state.projects.map(proj => <Demande titre={proj.titre} key={proj.projet_id} id={proj.projet_id} img={proj.img} montant={proj.montant} restant={proj.prR}  description={proj.description}/>)
                    
                }
            </div>
            <div className='float-right col-3 mt-3'>
                <button className="btn btn-primary text-uppercase p-3 " onClick={this.refesh}>Afficher plus</button>
            </div>
         </Fragment>
         );
    }
}
 
export default NewIn;