import React, { Component } from 'react'
import Header from '../components/header/Header';
import Cards from '../components/card/Cards';

export class HomePage extends Component {

    render() {
        return (
        <div>
            <section className="hero is-info is-large is-bold">
            <div className="hero-head">
                <Header />


            </div>
               

                <div className="hero-body">
                    <div className="container has-text-centered"> 
                        <h1 className="title">
                            FIVESPOT
                        </h1>
                        <h2 className="subtitle">
                            bs tagline that sounds cool but is bs
                        </h2>


                    </div>

                </div>

            </section>


           
            
              
            <Cards cards={this.props.cards}/> 
            {/* passes array of tourInfo objects
            (now called cards because that's what the info will be used for)
            to the Cards component*/}
        

        
            

        </div>
        );
    }
}

export default HomePage
