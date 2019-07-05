import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../../Header/Header';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Footer/Footer';
import All from "./All";

class SearchPage extends Component {
  
    
    state = {  }
    render() { 
      return ( 
            <React.Fragment>
            <CssBaseline />
              <Header/>
            <Container maxWidth="lg" className='text-center'>
            
              <div className='row pt-4'>
                <div className='col-4'>
                  <div className="input-group mr-auto">
                    <input type="text" className="form-control" placeholder="Recherche par nom"/>
                    <div className="input-group-append">
                      <button className="btn  btn-primary" type="button" id="searchbtn"><i className="fas fa-search"></i></button>
                    </div>
                  </div>
                  </div>
                <div className='col-3 ml-auto'>
                  <select className="form-control" id="orderBy">
                    <option>Trier</option>
                    <option id='dateAsc'>par date croissant</option>
                    <option id='dateDesc'>par date decroissant</option>
                    <option id='mntAsc'>par montant croissant</option>
                    <option id='mntDesc'>par montant decroissant</option>
                  </select>
                </div>
                </div>
                <All/>
            </Container>
            <AboutUs/>
            <Footer/>
          </React.Fragment>
        );
    }
}
 
export default SearchPage;