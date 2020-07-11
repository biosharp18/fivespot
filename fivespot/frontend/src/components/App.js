import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from '../pages/HomePage';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",



      // Practice Data Structure (somewhat resembles POST format)
      tourInfo:[

        //each tour is an object in the array, with a number of properties and other objects inside
        {
          thumbnail: "Insert Thumbnail Here",
          title: "Insert Title Here",
          user: "Insert User Here",
          description: "Insert Description Here",
          created_at:"Insert TimeStamp Here",

          //spots are stored in an object array, each spot is an object with sub, body and coords as accessible properties
          spots: [
            
            //spot 1
            {
              sub: '',
              body: '',
              xCoord: '',
              yCoord: '',

            },
            //spot 2
            {
              sub:'',
              body:'',
              xCoord:'',
              yCoord:'',

            },
            //spot 3
            {
              sub: '',
              body: '',
              xCoord: '',
              yCoord: '',

            },
            //spot 4
            {
              sub: '',
              body: '',
              xCoord: '',
              yCoord: '',

            },
            //spot 5
            {
              sub:'',
              body:'',
              xCoord:'',
              yCoord:'',

            },

          ]
        },

      ]

    };
  }

  componentDidMount() {
    fetch("api/posts")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  


  

  render() {
    return (
      <div>
    

        <HomePage cards={this.state.tourInfo}/> {/*passes array of tourInfo objects to home page property*/}
       
      </div>
      
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
