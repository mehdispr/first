import React, { Component } from 'react';
import Demande from '../../Demande/Demande';

 
class All extends Component {
  
      state ={
        projets: []
      }
      pr = function(m,r) {
        return 0
      };
      componentDidMount() {
        this.fetchData();
      }
      fetchData(){
        fetch('http://127.0.0.1:8000/api/projet')
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.data.map(proj => 
            ({
                titre : `${proj.titre}`,
                projet_id : `${proj.projet_id}`,
                montant : `${proj.montant}` ,
                restant : `${proj.restant}` ,
                description : proj.description,
                date_fin : proj.date_fin,
                prR : (((proj.montant - proj.restant)/proj.montant)*100),
                img : "https://picsum.photos/640/360"
            })))
            .then(projets => this.setState({ projets }))
          .catch(error => console.log(error))
      }

      render() { 
        return (
          <React.Fragment>
            <div className='row pt-2 justify-content-around '>
                 {
                   this.state.projets.map(proj => <Demande titre={proj.titre} date_fin={proj.date_fin} montant={proj.montant}  img={proj.img} restant={proj.prR} description={proj.description}/>)
                  
                 }
            </div>
          </React.Fragment>
         );
    }
}
 
export default All;