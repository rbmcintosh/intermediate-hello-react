import React, { Component } from 'react';
import '../style/App.css';
import HomePage from './HomePage';
import Resume from './Resume';
import Gallery from './Gallery';
import Projects from './Projects';
import {BrowserRouter, Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
