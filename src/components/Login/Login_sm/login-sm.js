import React, {Component} from 'react';

class LoginSM extends Component {
  render() {
    return (
      <div className='half-width  white-bg'>
        <h4>Login Using social media</h4>
        <button className='button-sm button-sm--google'></button>
        <button className='button-sm button-sm--linkedin'></button>
        <button className='button-sm button-sm--xing'></button>
      </div>
    );
  }
}

export default LoginSM;
