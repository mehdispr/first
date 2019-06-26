import React, { Component } from 'react';
import Demande from './Demande';

class Top5 extends Component {
    
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
        fetch('http://127.0.0.1:8000/api/projet/get/top')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.data.map(proj => (
            {
                titre : `${proj.titre}`,
                projet_id : `${proj.projet_id}`,
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
               <Demande/>
            </div>
         );
    }
}
 
export default Top5;