import React, {Component} from 'react';
import Header from './components/Header/header.js'
import Login from './components/Login/login.js'
import App from './app/app.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       

       <BrowserRouter>
                <React.Suspense fallback={loading()}>
                  <Switch>
                      <Route path="/" exact  name="Home"  render={props => <HomePageHeader {...props} />}/>
                  </Switch>
                      <Switch>
                          <Route path="/" exact  name="Home" render={props => <Body {...props}/>} />
                          <Route path="/login" exact name="Login Page" render={props => <AuthenticationSignIn {...props}/>}/>
                          <Route path="/signup" exact name="Login Page" render={props => <AuthenticationSignUp {...props}/>}/>
                          <Route path="/verify" exact name="verify" render={props => <Verify {...props}/>} />
                          <ProtectedRoute path="/app" exact name="verify" component={Application} />
                          <Route path="/forgotPassword" exact name="forgotPassword" render={props => <ForgotPassword {...props}/>} />
                          <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                          <Route path='*' exact={true} component={Page404} />
                      </Switch>
                </React.Suspense>
              </BrowserRouter>



        <Login/>
      </div>
    );
  }
}

export default App;
