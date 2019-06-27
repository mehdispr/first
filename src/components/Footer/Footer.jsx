import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-md-4">
                            <span className="copyright">Copyright © Saver 2019</span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#twitter">
                                <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#fb">
                                <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#linkedIn">
                                <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        
                        </div>
                    </div>
                    </footer>
            </React.Fragment>
          );
    }
}
 
export default Footer;