import React, { Component } from 'react';
import Header from '../components/header/Header';
import Map from '../components/map/Map';
import MapMarker from '../components/map/MapMarker';
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';



export class MapView extends Component {
  
    render() {
        return (
        <div>
     
     
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


                    <a className="navbar-item">  
                        <Link to='/profile'>


                                <img src="https://www.canbind.ca/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png" width="45" height="32" className="is-rounded" />

                        
                        </Link>

                    </a>   
                  
                         

                   
                </div>
                
              
            </div>
            

        </nav>
        <section className="hero is-medium">

            <div className="container">
                    <div className="field">
                        
                        <p className="title is-2">  Create Your Fivespot!</p>
                    

                    </div>
            </div>

        
        </section>





        <div className="container mt-6"> 
           
        <input className="input is-large" type="text" placeholder="Title" ></input>
        
        
                <div className=" box columns mt-4 mb-4">

                        <div className="column is-8 ">

                            <div className="field">
                                <label className="label">Location</label>

                                <div className="control">
                                    <input className="input" type="text"></input>
                                </div>

                            </div>

                            <div className="field">

                                <label className="label"> Description</label>

                                <div className="control">
                                    <textarea className="textarea"></textarea>
                                </div>

                            </div>

                        </div>

                        <div className="column is-4">
                                
                                <MapMarker/>
                        </div>

                </div>





                <div className="box columns mt-4 mb-4">

                    <div className="column is-8 ">

                        <div className="field">
                            <label className="label">Location</label>

                            <div className="control">
                                <input className="input" type="text"></input>
                            </div>

                        </div>

                        <div className="field">

                            <label className="label"> Description</label>

                            <div className="control">
                                <textarea className="textarea"></textarea>
                            </div>

                        </div>

                    </div>

                    <div className="column is-4">
                            
                            <MapMarker/>
                    </div>

              </div> 





              <div className="box columns mt-4 mb-4">

                <div className="column is-8 ">

                    <div className="field">
                        <label className="label">Location</label>

                        <div className="control">
                            <input className="input" type="text"></input>
                        </div>

                    </div>

                    <div className="field">

                        <label className="label"> Description</label>

                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>

                    </div>

                </div>

                <div className="column is-4">
                        
                        <MapMarker/>
                </div>

            </div> 





             <div className="box columns mt-4 mb-4">

                <div className="column is-8 ">

                    <div className="field">
                        <label className="label">Location</label>

                        <div className="control">
                            <input className="input" type="text"></input>
                        </div>

                    </div>

                    <div className="field">

                        <label className="label"> Description</label>

                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>

                    </div>

                </div>

                <div className="column is-4">
                        
                        <MapMarker/>
                </div>

            </div> 


            <div className="box columns mt-4 mb-4">

                <div className="column is-8 ">

                    <div className="field">
                        <label className="label">Location</label>

                        <div className="control">
                            <input className="input" type="text"></input>
                        </div>

                    </div>

                    <div className="field">

                        <label className="label"> Description</label>

                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>

                    </div>

                </div>

                <div className="column is-4">
                        
                        <MapMarker/>
                </div>

                </div> 

            <div className="field mt-4 mb-4">
                <div className="control">
                    <Link to="/submitted">
                        <button className="button is-medium is-fullwidth is-primary" > Submit</button>
                    
                    </Link>
                </div>
            </div>

        </div>
        
    </div>
     
           
        );
    }
}

export default withRouter(MapView)
