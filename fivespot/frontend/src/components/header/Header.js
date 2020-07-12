import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';


export class Header extends Component {
    render() {
        return (

        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to='/'>
                        <p className="navbar-item title is-3">FIVESPOT</p>
                    </Link>
                        
                 
                </div>
                
            </div>
            
            <div className="navbar-menu">

                <div className="navbar-end">
                    <div className="navbar-item">
                    
                        <Link to="/createmap">

                            <a className="button is-primary">
                                Create a Fivespot
                            </a>

                        </Link>
                    </div>


                    <a className="navbar-item">  
                        <Link to='/profile'>


                                <img src="https://www.canbind.ca/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png" width="45" height="50" className="is-rounded" />

                        
                        </Link>

                    </a> 
                          
                  
                         

                   
                </div>
                
              
            </div>
            

        </nav>

        );
    }
}

export default withRouter(Header)
