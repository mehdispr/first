import React, { Component, Fragment } from 'react';
import Demandeur from './DemandeurDash/DemandeurDash';
import Donateur from './DonateurDash/DonateurDash';
import {Redirect} from 'react-router-dom'
// import {Redirect} from 'react-router-dom';

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : JSON.parse(sessionStorage.getItem('user')),
            
            type: sessionStorage.getItem('type')
         }
         this.con = this.con.bind(this)
    }
    state={
        logged : sessionStorage.getItem('logged'),
    }
    con = () => {

        this.setState({ type: this.state.user.type })
        return;
    }
    render() { 
        
        return ( 
            <Fragment>
                
                    {
                        
                        // this.state.type === 'Donateur' && this.state.logged ? <Donateur/> :  <Demandeur/>
                        this.state.type === 'Donateur' ? <Redirect to='/user/donateur'/> :  <Redirect to='/user/demandeur'/>

                    }
            </Fragment>
         );
    }
}
 
export default Dash;