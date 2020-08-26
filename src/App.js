import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Me from './components/Me';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>About Me</h1>
        <Nav/><br/>
        <Switch>
          <Route exact path="/" component={Me}/>
          <Route path="/hobbies" component={Hobbies}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
