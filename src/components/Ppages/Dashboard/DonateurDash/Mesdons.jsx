import React, { Component } from 'react';
import Row from './row';
import axios from 'axios'
class Mesdons extends Component {

    
    state = { 
        don : [],
        donateur_id : null,
        donateur_nom: null
    }

    componentWillMount() {

        let user = JSON.parse(sessionStorage.getItem('user'))
        let id = user.donateur_id
        this.setState({ donateur_id: id });
        this.setState({ donateur_nom: ` ${user.nom} ${user.prenom}` });
        
        console.log(this.state)
        
        //  axios.post('http://127.0.0.1:8000/api/donateur/donnation',{'donateur_id':id})
        // .then(res => {
        //     this.setState({ don: res.data.data });
            
        // })
        // .catch(error => console.log(error))
        
    }

   
    render() { 
        
        return ( 
                <table className="table col-8 mx-auto table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Don</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            // this.state.don.map(d => <Row key={d.don_id} id={d.don_id} titre={d.titre} montant={d.montant_projet} donnation={d.donnation} />)
                        }
                    </tbody>
                </table>
         );
    }
}
 
export default Mesdons;