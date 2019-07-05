import React, { Component, Fragment } from 'react';
import Mesdons from './Mesdons'

class DonateruDash extends Component {
    state={
        donateur_nom:null
    }
    
    componentDidMount() {
        let user = JSON.parse(sessionStorage.getItem('user'))
        this.setState({ donateur_nom: ` ${user.nom} ${user.prenom}` });
        console.log(this.state)
        
    }
    
    Logout = () =>{
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('type')
        sessionStorage.setItem('logged',false)
        window.location.replace('/')
    }
    
    render() { 
        const name =this.state.donateur_nom
        return ( 
            <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand js-scroll-trigger" style={{fontFamily:'The Sunset',fontWeight:'700',color:'#fed136'}}href="#here">Saver</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#mesdons">Mes dons <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-dark" href="#here" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{name}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#here">Profile</a>
                            <a className="dropdown-item" href="#here" onClick={this.Logout}>Deconnecter</a>
                    </div>
                    </div>
                </div>
            </nav>
            <section>
                <Mesdons/>
            </section>
            
    </Fragment>

         );
    }
}
 
export default DonateruDash;