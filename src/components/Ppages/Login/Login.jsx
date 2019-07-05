import React, { Component } from 'react';
import './main.css';
import './util.css';
import '../../../vendor/fontawesome-free/css/all.css';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = { 
            
         }
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleChange = this.handleChange.bind(this)
         this.fill = this.fill.bind(this)
    }
    state={
        'email':null,
        'password':null,
        'type':null,
        msg:null
    }

     handleSubmit = (event)=>{
         event.preventDefault()
         console.log(this.state)
         
            if(this.state.type === 'type' || this.state.type === null){
                this.setState({ msg: 'Veuillez choisir le type de votre compte' });
            }else{

                
                axios.post("http://127.0.0.1:8000/api/login",this.state)
                .then(res => {
                    res.data.success ?  this.fill( JSON.stringify( res.data.data ) ) : this.setState({ msg: res.data.data  })
                })
                .catch(error => console.log(error))
            }
     }

     fill = (user) => {

         this.setState({ logged: true });
         sessionStorage.setItem('user',user)
         sessionStorage.setItem('type',this.state.type)
         sessionStorage.setItem('logged',this.state.logged)

         let u = JSON.parse(user)
         this.setState({ type :  u.type })
         window.location.replace('/user')
     }


     handleChange = (event)=>{
         this.setState({ 
             msg : null,
             [event.target.name] : event.target.value
          });
         
         
     }
    render() { 
        
        return (
            <React.Fragment>
                
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={'/img-01.png'} alt="IMG" />
                        </div>
                        <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                            <span className="login100-form-title">
                            Login
                            </span>

                            <div className="wrap-input100 validate-input">
                            <span className="symbol-input100">
                                <i className="fa fa-user" aria-hidden="true" />
                            </span>
                                <select className='input100' name='type' style={{border:'none'}} onChange={this.handleChange}>
                                    <option defaultValue>Type</option>
                                    <option >Donateur</option>
                                    <option >Demandeur</option>
                                </select>

                            </div>

                            <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="email" required placeholder="Email" onChange={this.handleChange}/>
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                            <input className="input100" type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true" />
                            </span>
                            </div>
                            <h5 className="txt1 text-center" style={{color:"red"}}>
                                {this.state.msg}
                            </h5>
                            <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                            </div>
                            <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <a className="txt2" href="/login"> Username / Password? </a>
                            </div>
                            <div className="text-center p-t-136">
                            <a className="txt2" href="/login">Create your Account <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                            </a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>


            </React.Fragment>
         );
    }
}
 
export default Login;