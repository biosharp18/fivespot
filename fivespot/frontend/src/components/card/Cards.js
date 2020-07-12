import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export class Cards extends Component {

    render() {
        
        return(
            
            <div className=" row columns is-multiline">
                <div className="column is-4"> {/*Figure out column sizing later*/}
            <Link to="/entertour">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <img src=" https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769
                        &fov=80&heading=70&pitch=0
                        &key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU" />

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                  What happened to CabbageTown

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Alex Smith

                            </p>
                            <p>
                                Cabbagetown used to be so full of fresh markets.Where did they go?
                            </p>
                           
                    
                        </div>
                        
                    </div>

                    </div>
                    </Link>

                </div>

                <div className="column is-4"> 

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=50.8503,4.3517
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/>

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                  Brussels-A City I am Proud to Call Home

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                
                                    Emmanuel Bisset
                            </p>
                            <p>
                                The amazing food is among the many things I've grown to love and and appreciate about my city

                            </p>
                          
                    
                        </div>
                        
                    </div>

                    </div>


                </div>

                <div className="column is-4"> {/*Figure out column sizing later*/}

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <h1> <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=44.7866, 20.4489
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/> </h1> 

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                 Belgrade- a hidden gem of europe

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Bogdan Brkic

                            </p>
                            <p>
                                After returning back to my home city of Belgrade, after spending 20 years as a phyics teacher, i truly began to appreciate it more
                            </p>
                           
                    
                        </div>
                        
                    </div>

                    </div>


                </div>



            


                <div className="columns is-multiline">


                </div>
                <div className="column is-4"> {/*Figure out column sizing later*/}

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <h1> <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=44.549443, -79.207476
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/> </h1> 

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                    Lagoon City-Ontario's take on venice

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Angela Gupta

                            </p>
                            <p>
                                A town with charm and a surpringly vibrant upbeat culture
                            </p>
                           
                    
                        </div>
                        
                    </div>

                    </div>


                </div>
                <div className="column is-4"> {/*Figure out column sizing later*/}

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <h1> <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=44.2237239, -76.484528
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/> </h1> 

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                  Kingston, some of the best sights, smells and taste in Ontario
                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Amelia Jiang

                            </p>
                            <p>
                                Aethestic coffee shops, relaxing lackside walks and much more
                            </p>
                           
                    
                        </div>
                        
                    </div>

                    </div>


                </div>

                {/* NUMBER 4 */}

                <div className="column is-4"> {/*Figure out column sizing later*/}

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <h1> <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5622,13.6493
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/> </h1> 

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                  What it's like living in Hallstat, Austria

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Kevin Parker

                            </p>
                            <p>
                                Besides being known for it's scenic views, this little town has some very interesting and rich local history
                            </p>
                           
                    
                        </div>
                        
                    </div>

                    </div>


                </div>

            </div>

            

        );
        
        
        
   

      
            
        
    }
}

export default Cards
