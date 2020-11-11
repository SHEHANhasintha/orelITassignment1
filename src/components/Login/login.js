import React, { Component } from 'react';
import LoginManual from './Login_manual/login-manual.js';

class Login extends Component {
  render() {
    return <div className='container-fluid big-bg'>
      <LoginManual/>
    </div>;
  }
}

export default Login;
