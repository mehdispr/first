import React, { Component } from 'react';
import axios from 'axios';
import Row from './Row';

class MesDemande extends Component {
    state = { 
        proj : [],
        demandeur_id:'',
     }

     componentWillMount() {

        let user = JSON.parse(sessionStorage.getItem('user'))
        let id = user.demandeur_id
        this.setState({ demandeur_id: id });
        
         axios.post('http://127.0.0.1:8000/api/demandeur/demandes',{'demandeur_id':id})
        .then(res => {
            this.setState({ proj: res.data.data });
            
            
        })
        .catch(error => console.log(error))
        
    }
    dlt = () =>{
        alert(this)
    }

    render() { 
        return ( 
            <table className="table col-8 mt-5 mx-auto table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Restant</th>
                        <th scope="col">Date de fin</th>
                        <th scope="col">Vue</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.proj.map((d,i) => <Row key={d.projet_id} id_proj={d.projet_id} id={i} titre={d.titre} montant={d.montant} reste={d.restant} date_fin={d.date_fin} vue={d.visited} />)
                        }
                    </tbody>
                </table>
         );
    }
}
 
export default MesDemande;