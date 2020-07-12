import React, { Component } from 'react';
import Header from "../components/header/Header";

 export class ProfilePage extends Component {


    render() {
        return (
            <div>
                <Header />
        <div className="container mt-5">
                <div className="hero pt-3">
                    <article className="media pt-6">
                        <figure className="media-left">
                            <p className="image is-128x128 ">

                            <img src="https://www.canbind.ca/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png" className="is-rounded"/>

                            </p>
                        </figure>
                        <div className="media-content ml-5">
                            <div className="content">
                                <p>
                                    <strong className="title is-3"> Cole Walsworth </strong>
                                
                                    <p>
                                        Hi! I'm a 20 year old living Quebec city. I love chilling and coffee shops and taking long walks at the beach
                                        
                                    </p>
                                </p>

                            </div>

                        </div>
                    </article>
                </div>


            <div className="tabs is-centered">
                <ul>
                    <li>Fivespots</li>
                </ul>
            </div>


            <div className=" row columns is-multiline">
          
                
                <div className="column is-4"> {/*Figure out column sizing later*/}

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-16by9">
                            
                        <h1> <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=43.889585,-79.300366
&fov=80&heading=70&pitch=0
&key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"/> </h1> 

                        </figure>
                    </div>

                    <div className="card-content">

                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"> 
                                  My Dear Hometown- the City of Markham

                                </p>
                            </div>
                        </div>

                        <div className="content">

                            <p className="title is-6">
                                Cole Walsworth

                            </p>
                            <p>
                                The city of Markham was founded in 1868 = its where I spent my childhod
                            </p>
                    
                        </div>
                        
                    </div>

                </div>


            </div>

        </div>

    </div>

    </div>
        );
    }
}

export default ProfilePage
