import React, { Component } from 'react'
import HomeButton from './HomeButton';

export class Header extends Component {
    render() {
        return (
            
            <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">

                    <p>FIVESPOT</p>
                    
                </div>
                
                    
            
            </div>
            <div className="navbar-menu">
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


        );
    }
}

export default Header
