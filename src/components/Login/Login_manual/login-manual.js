import React, {Component} from 'react';

let login = 'dd'
let password = ''

const handleChangeEmailField = (e) => {
  e.preventDefault();
  password = e.target.value.trim()
  return(new Promise(async(resolve,reject) => {
    await resolve(e.target.value.trim());
  }))  
}

const handleNameChangeField = (e) => {
  e.preventDefault();
  login = e.target.value.trim()
  return(new Promise(async(resolve,reject) => {
    await resolve(e.target.value.trim());
  }))  
}



const submitCredentials = (e,props) => {
  e.preventDefault();
  //callback function would be to call toggleAuth
  return(new Promise(async(resolve,reject) => {
    if ((login.trim() === 'name') && (password.trim() === 'pass')){
      props.props.history.push('/app')
    }

  }))
}

class LoginManual extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className='half-width white-bg'>
        <h4>Login Manually</h4>
        <br/>
        <form action="">
          <div className='form-group'>
            <input type="text"  onChange={(e) => handleNameChangeField(e)}  className='form-control' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input type="password" onChange={(e) => handleChangeEmailField(e)} className='form-control' placeholder='Password'/>
          </div>
          <button type="submit" onClick={(e) => submitCredentials(e,this.props)} className='btn btn-primary right-btn'>Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginManual;
