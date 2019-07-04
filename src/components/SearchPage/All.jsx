import React, { Component } from 'react';
import Demande from "./Demande";

class All extends Component {
    constructor(props){
        super(props);
        this.state={
          projects:[]
        }
      }
      componentDidMount() {
        this.fetchData()
      }
      fetchData(){
        fetch('http://127.0.0.1:8000/api/projet/')
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.data.map(proj => (
                {
                    titre : `${proj.titre}`,
                    projet_id : `${proj.projet_id}`,
                    date_fin : `${proj.date_fin}` ,
                    montant : `${proj.montant}`,
                    restant : `${proj.restant}`,
                    restantPr : (((`${proj.montant}` - `${proj.restant}`) / `${proj.montant}`) * 100),
                    description : `${proj.description}`,
                }
            )))
            .then(projects => this.setState({ projects }))
            .catch(error => console.log(error))
      }
  
    render() { 
        return (
            <div className='row pt-2 justify-content-around '>
                {
                    this.state.projects.map(proj => console.log(proj)
                     )
                    
                    // this.state.projects.map(proj => <Demande projet_id={proj.projet_id} titre={proj.titre} date_fin={proj.date_fin} img='https://picsum.photos/840/560' restantPr={proj.restantPr} description={proj.description} montant={proj.montant} />)
                }
                </div>
         );
    }
}
 
export default All;