import React, { Component } from 'react'

export class Card extends Component {

    //REMINDER: put semi-colons at the end of return statements!!

    render() {
        return (
            <div>
                <div className="column"> {/*Figure out column sizing later*/}

                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-5b3">
                                
                            <h1> {this.props.card.thumbnail} </h1> 

                            </figure>
                        </div>

                        <div className="card-content">

                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4"> 
                                    {this.props.card.title}

                                    </p>
                                </div>
                            </div>

                            <div className="content">

                                <p className="title is-6">
                                {this.props.card.user}

                                </p>
                                <p>
                                    {this.props.card.description}
                                </p>
                                <p>
                                    {this.props.card.created_at}
                                </p>
                        
                            </div>
                            
                        </div>
                    
                    </div>

               
                </div>

            </div>
        );
    }
}

export default Card
