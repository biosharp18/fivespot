import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import MapView from '../pages/MapView';
import submitted from '../pages/submitted';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",


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
      <Router>
        <div>
      
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/createmap" component={MapView}/>
            <Route path="/submitted" component={submitted}/>
          </Switch>

          

        </div>


      </Router>
        
    
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
