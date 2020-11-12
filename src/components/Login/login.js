import React, { Component } from 'react';
import LoginManual from './Login_manual/login-manual.js';
import MainCarry from '../../app/MainCarry'

class Login extends Component {
  render() {
    return <div className='container-fluid big-bg'>
      <LoginManual name="Home" props={this.props}/>
    </div>;
  }
}

export default Login;
