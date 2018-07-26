import React, { Component } from "react";

import {Route} from "react-router-dom";

import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        
        <Route path="/" exact={true} component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/horseshoecrab" component={HorseShoeCrab}/>
      </div>
    );
  }
}


const Landing = (props) => {
  return (
    <div>
      <h1>This is the landing page.</h1>
    </div>
  );
}

const Home = (props) => {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1>Welcome the About page!</h1>
    </div>
  );
}

const HorseShoeCrab = (props) => {
  return (
    <div>
      <h1>Welcome to ze page of ze HorseShoeCrab!</h1>
    </div>
  );
}


export default App;
