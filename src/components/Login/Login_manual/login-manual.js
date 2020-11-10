import React, {Component} from 'react';

let login = 'dd'
let password = ''

const handleChangeEmailField = (e) => {
  e.preventDefault();
  //console.log(e.target.value.trim())
  password = e.target.value.trim()
  console.log(password)
  return(new Promise(async(resolve,reject) => {
    await resolve(e.target.value.trim());
  }))  
}

const handleNameChangeField = (e) => {
  e.preventDefault();
  //console.log(e.target.value.trim())
  login = e.target.value.trim()
  console.log(login)
  return(new Promise(async(resolve,reject) => {
    await resolve(e.target.value.trim());
  }))  
}


const submitCredentials = (e) => {
  e.preventDefault();
  //callback function would be to call toggleAuth
  return(new Promise(async(resolve,reject) => {
    console.log(e.target.value.trim());
    
    if ((login.trim() === 'name') && (password.trim() === 'pass')){
      console.log("good")
      window.location = "./ap"
    }

    //console.log(thita,process.env.REACT_APP_APPLICATION_PROXY+ "/auth/local");
    /*axios
      .post("/auth/local",thita)
      .then((res) => {
        console.log(res);
        if (res.status == 200){
          cb(true)
          //window.location = "./app"*/
          
       /* }
      })
      .catch((err) => console.log(err))*/
    //await resolve(cb());
  }))
}

class LoginManual extends Component {

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
          <button type="submit" onClick={(e) => submitCredentials(e)} className='btn btn-primary right-btn'>Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginManual;
