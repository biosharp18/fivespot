import React, { Component } from 'react'
import Card from "./Card"

export class Cards extends Component {

    render() {
        
        return(
            
            <div className="columns">

                {this.props.cards.map((card)=>(
                 
                    <Card card={card} />  
                ))}

            </div>
            

        );
        
        
        
   

      
            
        
    }
}

export default Cards
