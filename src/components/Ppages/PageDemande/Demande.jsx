import React, { Component, Fragment } from 'react';
import Nav from '../../Nav/Nav';
import axios from "axios";
import Footer from '../../Footer/Footer'
import About from '../../AboutUs/AboutUs'

class Demande extends Component {
    state = { 
        projet_id:sessionStorage.getItem('projet_id'),
        demandeur_id:'',
        rest:null,
        data:[],
        demandeurData:[],
        comments:[],
        don:[]
     }
     
     componentDidMount() {
         
        
         this.fetchProjData()
         this.fetchComData()
         this.fetchdon()
         this.fetchDemandeurData()
     }
     
     fetchProjData = () => {
         
         axios.get(`http://127.0.0.1:8000/api/projet/${this.state.projet_id}`)
         .then(res => this.setState({ 
             data: res.data.data,
             rest:(((res.data.data.montant - res.data.data.restant)/res.data.data.montant)*100),
             demandeur_id : res.data.data.demandeur_id
            }))
            .catch(error => console.log(error))
            
        }
        fetchDemandeurData = () => {
            
            axios.get(`http://127.0.0.1:8000/api/projet/getdemandeur/${this.state.projet_id}`)
            .then(res =>  this.setState({ demandeurData : res.data  }))
            .catch(error => console.log(error))
           
    }
    fetchComData = () => {
        axios.post(`http://127.0.0.1:8000/api/projet/retrieve/comments`,{'projet_id':this.state.projet_id})
        .then(res =>  this.setState({ comments: res.data.data }))
    }
    fetchdon = () => {
        axios.post('http://127.0.0.1:8000/api/projet/getedon',{'projet_id':this.state.projet_id})
        .then(res => this.setState({ don: res.data.data }))
        .catch(error => console.log(error))
    }
    render() {
        return ( 
            <Fragment>
                <Nav />
                <div>
                    <div className="mt-5 py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${this.state.rest}%`}}>{`${this.state.rest}%`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 text-center my-4" style={{}}>
                                    <h2 >{this.state.data.titre}</h2>
                                </div>
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6" style={{}}>
                                    <div className="carousel slide w-100" data-ride="carousel" id="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active"> <img alt='img1' className="d-block img-fluid w-100" src="https://picsum.photos/640/360" style={{}} />
                                            </div>
                                            <div className="carousel-item"> <img alt='img2' className="d-block img-fluid w-100" src="https://picsum.photos/620/360" />
                                            </div>
                                            <div className="carousel-item"> <img alt='img3' className="d-block img-fluid w-100" src="https://picsum.photos/610/360" />
                                            </div>
                                        </div> <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" /> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" /> <span className="sr-only">Next</span> </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2 className='mb-5'>Les derniers dons</h2>
                                    
                                    {
                                        this.state.don.map((d,i)=>{
                                            return (
                                                <div className="row my-2" key={i}>
                                                    <div className="col-md-4 justify-content-center align-items-start d-flex flex-grow-0"><img alt='avatar' className=" d-block rounded-circle col-6" src="https://picsum.photos/250/260" /></div>
                                                    <div className="col-md-8">
                                                        <h5 >{`${d.nom} ${d.prenom}`}</h5>
                                                        <label className='text-muted'>{`${d.date}`}</label>
                                                        <h6 >{`${d.montant} MAD`}</h6>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                    <div className="row my-5">
                                        <div className="col-md-5 text-justify" style={{}}>
                                            <div className="form-group"> <input type="text" className="form-control col-5 mx-auto form-control-sm text-primary text-center" placeholder="$$$" name="donnation" id="donnation" /> </div>
                                        </div>
                                        <div className="col-md-6" style={{}}><a className="btn btn-primary text-white text-center" href="#here">Donner</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Description</h2>
                                    <hr className='col-4 mx-auto'></hr>
                                    <h4 className='text-muted mt-2 mb-3'>{this.state.data.categorie}</h4>
                                    <p>{this.state.data.description}.</p>
                                </div>
                                <div className="container col-6">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <div className="row mx-auto">
                                                        <div className="col-md-2" ><img alt='avatar' className="mx-auto d-block rounded-circle" src="https://picsum.photos/60/60" width="50" /></div>
                                                        <div className="col-md-4" >
                                                            <h5 >{this.state.demandeurData.nom}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-6 my-2">
                                                                    <h6 >{this.state.demandeurData.ville}</h6>
                                                                </div>
                                                                <div className="col-md-6 my-2">
                                                                    <h6 >{this.state.demandeurData.tel}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5 >{this.state.demandeurData.email}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container col-6 '>
                    <h2 className='text-center'>Ce que les gens pense</h2>
                    <hr className='col-4 mx-auto'></hr>
                        {
                            this.state.comments.map((c,i)=>{
                                return(
                                    <div key={i} className="py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-7 mx-auto my-2">
                                                    <div className="row">
                                                        <div className="col-md-4"><img alt='avatar' className="d-block rounded-circle col-7 mx-auto" src="https://picsum.photos/50/50" /></div>
                                                        <div className="col-md-8">
                                                            <h5 >{`${c.nom} ${c.prenom}`}</h5>
                                                            <h6 className='mb-3 text-muted'>{`${c.date}`}</h6>
                                                            <p className="p">{`${c.texte}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <About/>
                <Footer/>
            </Fragment>


         );
    }
}
 
export default Demande;