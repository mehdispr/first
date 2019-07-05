import React, { Component } from 'react';

class Nav extends Component {
    render() { 
        return (  
            <nav className=" navbar-expand-lg navbar-dark fixed-top " id="mainNav">
                <div className="navbar container colored-nav col-12 navbar-expand-lg navbar-dark fixed-top">
                <a className="navbar-brand js-scroll-trigger" style={{fontFamily:'The Sunset',fontWeight:'700'}}href="/">Saver</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#topDemandes">Top 5</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#newIn">Nouvelle demande</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#aboutUs">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/login">Login</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
 
export default Nav;