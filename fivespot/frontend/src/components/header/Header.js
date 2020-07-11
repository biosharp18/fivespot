import React, { Component } from 'react'
import HomeButton from './HomeButton';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
    <Router>
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    
                    <Link to="/">
                        <p className="title is-3">FIVESPOT</p>
                    </Link>
                    
                </div>
                
            </div>
            <div className="navbar-menu">

                <div className="navbar-start">
                    <div className="navbar-item">
                        <Link to="/map"> 

                            <a className="button is-primary">
                                Create a Tour
                            </a>

                        </Link>
                    </div>
                </div>
                
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a className="button is-primary">
                            Login
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a  className="button is-light">
                            Signup
                        </a>
                    </div>
                    
                    
                </div>
            </div>
            

        </nav>

    </Router>

           

        );
    }
}

export default Header
