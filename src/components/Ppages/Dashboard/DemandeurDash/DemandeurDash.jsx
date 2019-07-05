import React, { Component, Fragment } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';
import $ from 'jquery';

class DemandeurDash extends Component {
    constructor(props){
        super(props)
        this.dltProj=this.dltProj.bind(this)
        this.editProj=this.editProj.bind(this)
    }
    state = {
        demandeur_nom:'',
        demandeur_id:null,
        modalIsOpen: false,
        moderateur_id:3,
        titre:'',
        categorie:'',
        montant:'',
        date_debut:'',
        description:'',
        img:null,
        proj : [],
      }

      dltProj = () => 
    {

        $(document).on('click','.deletebtn',function(){

           let id = $(this).data('id')
           
           Axios.delete(`http://127.0.0.1:8000/api/projet/${id}`)
           .then(res => console.log(res.data))
           .then(id=null)
           .catch(error => console.log(error))
           
        })

    }

    editProj = () =>{
    
        //manque de logique pour modifier la demande    

        $(document).on('click','.editbtn',function(){
            let id = $(this).data('id');

            Axios.get(`http://127.0.0.1:8000/api/projet/${id}`)
            .then((res)=>  console.log(res.data))
            .then(console.log(this.state))
                

        })
    }

    toggleModal(){
        this.setState({ modalIsOpen: !this.state.modalIsOpen  });
    }
    
    getProj = (id) => {
        Axios.post('http://127.0.0.1:8000/api/demandeur/demandes',{'demandeur_id':id})
        .then(res => {
            this.setState({ proj: res.data.data });
        })
        .catch(error => console.log(error))
        
      }
    
      componentDidMount() {
        this.dltProj()
        this.editProj()
        let user = JSON.parse(sessionStorage.getItem('user'))
        this.setState({ demandeur_nom: ` ${user.nom} ${user.prenom}` });
        this.setState({ demandeur_id: user.demandeur_id });

        let id = user.demandeur_id
        this.setState({ demandeur_id: id });

        this.getProj(id)
        
      }
     
    Logout = () =>{
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('type')
        sessionStorage.setItem('logged',false)
        window.location.replace('/')
    }
    handleUpload = (e) => {
        this.setState({ img: e.target.files[0].name });
    }
    handleChange = ( e ) => {
        
        this.setState({
            [e.target.name] : e.target.value 
            });
            
    }

    CreerDemande(){
        
        
        Axios.post('http://127.0.0.1:8000/api/projet/',{
            'demandeur_id' : this.state.demandeur_id,
            'moderateur_id' : this.state.moderateur_id,
            'titre' : this.state.titre,
            'categorie' : this.state.categorie,
            'montant' : this.state.montant,
            'date_debut' : this.state.date_debut,
            'description' : this.state.description,
            'img' : this.state.img
        })
        .then(res => console.log(res))
        .then(window.location.reload())
        .catch(error => console.log(error))
    }

    Afficher = (e) => {
        console.log(e.target.value)
    }

    render() { 
        const name = this.state.demandeur_nom;
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
                                <button className="nav-link" href="/">Home </button>
                            </li>
                            <li className="nav-item active">
                                <button className="nav-link" href="#mesdons">Mes demandes <span className="sr-only">(current)</span></button>
                            </li>
                        
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.toggleModal.bind(this)}>Nouvelle demande</button>
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
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Nouvelle demande</ModalHeader>
                    <ModalBody>
                    <form className="form-horizontal">
                        <fieldset>
                            
                            <div className="form-group justify-content-center">
                            <label className="col-md-4 control-label" htmlFor="titre">Titre</label>  
                            <div className="col-md-6">
                                <input onChange={this.handleChange} id="titre" name="titre" type="text" placeholder="titre" className="form-control input-md" required />
                                <span className="help-block">Titre du demande</span>  
                            </div>
                            </div>
                            
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="montant">Montant</label>  
                            <div className="col-md-6">
                                <input onChange={this.handleChange} id="montant" name="montant" type="text" placeholder="Montant" className="form-control input-md" required />
                                <span className="help-block">Montant necessaire</span>  
                            </div>
                            </div>
                            
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="categorie">Categorie</label>
                            <div className="col-md-6">
                                <select onChange={this.handleChange} id="categorie" name="categorie" className="form-control">
                                    <option value="null">Categorie</option>
                                    <option value="sociale">sociale</option>
                                    <option value="sport">sport</option>
                                    <option value="economie">economie</option>
                                    <option value="maladie">maladie</option>
                                </select>
                            </div>
                            </div>
                            
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="date_debut">Date de debut</label>  
                            <div className="col-md-6">
                                <input onChange={this.handleChange} id="date_debut" name="date_debut" type="date" className="form-control input-md" required />
                            </div>
                            </div>
                            
                            <div className="form-group">
                            <label className="col-md-6 control-label" htmlFor="img">Image principale</label>
                            <div className="col-md-4">
                                <input id="img" name="img" onChange={this.handleUpload} className="input-file" type="file" />
                            </div>
                            </div>
                            
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="description">Decription</label>
                            <div className="col-md-6">                     
                                <textarea onChange={this.handleChange} className="form-control" id="description" name="description" defaultValue={"Decription..."} />
                            </div>
                            </div>
                        </fieldset>
                        </form>

                    </ModalBody>
                    <ModalFooter>
                        <Button className='btn btn-primary btn-blue' onClick={this.CreerDemande.bind(this)}>Creer</Button>
                        <Button className='btn btn-danger btn-red' onClick={this.toggleModal.bind(this)}>Annuler</Button>
                    </ModalFooter>
                </Modal>
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
                            
                            this.state.proj.map((d, i)=>{
                                
                                return(
                                    <tr key={i}>
                                        <th scope="row">{d.projet_id}</th>
                                        <td>{d.titre}</td>
                                        <td>{d.montant}</td>
                                        <td>{d.restant}</td>
                                        <td>{d.date_fin}</td>
                                        <td>{d.visited}</td>
                                        <td>
                                            <button className='text-primary'><i className="far fa-eye"></i></button>
                                            <button className='text-primary ml-4 editbtn' data-id={d.projet_id}><i className="far fa-edit"></i></button>
                                            <button className='text-danger ml-4 deletebtn' data-id={d.projet_id}><i className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table> 
            </Fragment>
         );
    }
}
 
export default DemandeurDash;