import React, {Component} from 'react';
import Login from './components/Login/login.js'
import Ap from './app/app.js'
import './App.css';

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
       

            <BrowserRouter>
                      <Switch>
                          <Route path="/" exact  name="Home" render={props => <Login {...props}/>}/>
                          <Route path="/app" exact  name="Home" render={props => <Ap {...props}/>} />
                      </Switch>
              </BrowserRouter>



        
      </div>
    );
  }
}

export default App;
