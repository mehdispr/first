import React, { Component } from 'react';

class Header extends Component {
    
    styles={
        backgroundImage : '../../img/header-bg-3.jpg'
    }
    render() { 
        return (  
            <header className="masthead" style={this.styles}>
                <div className="container">
                <div className="intro-text">
                    <div className="intro-heading text-uppercase">Collecter des fonds <br /> n'a jamais été aussi facile</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Dites moi plus</a>
                </div>
                </div>
            </header>
        );
    }
}
 
export default Header;