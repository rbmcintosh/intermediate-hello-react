import React, { Component } from 'react';
import '../style/App.css';
import HomePage from './HomePage';
import Resume from './Resume';
import Gallery from './Gallery';
import About from './About';
import {BrowserRouter, Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
