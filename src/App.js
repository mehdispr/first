import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./components/Ppages/HomePage/HomePage";
import SearchPage from "./components/Ppages/SearchPage/SearchPage";
import Login from './components/Ppages/Login/Login';
import Dash from './components/Ppages/Dashboard/Dash';
import DonateurDash from './components/Ppages/Dashboard/DonateurDash/DonateurDash';
import DemandeurDash from './components/Ppages/Dashboard/DemandeurDash/DemandeurDash';
import Demande from './components/Ppages/PageDemande/Demande';

function App() {
  return (
    <Router>

      <Route path='/' exact component={HomePage}></Route>
      <Route path='/search'  component={SearchPage}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/user'  component={Dash}></Route>
      <Route path='/user/donateur'  component={DonateurDash}></Route>
      <Route path='/user/demandeur'  component={DemandeurDash}></Route>
      <Route path='/demande/'  component={Demande}></Route>

    </Router>

  );
}

export default App;
