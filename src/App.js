import React, {Component} from 'react';
import Login from './components/Login/login.js'
import MainCarry from './app/MainCarry.js'
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
                <Switch>
                    <Route path="/" exact  name="Home" render={props => <Login {...props}/>}/>
                    <Route path="/app" exact  name="app" render={props => <MainCarry {...props}/>} />
                </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
