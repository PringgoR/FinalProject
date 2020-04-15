import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Navbar/navbar';
import Login from './Pages/LoginComponent/logincomponent';
import './App.css';
import Home from './Pages/Home/Home';
import fetchUsers from './Pages/FetchUsers/fetchusers';
import About from './Pages/About/about';
import Witness from './Pages/Witness/witness';
import SignUp from './Pages/Signupcomponent/signupcomponent';
import Confirmation from './Pages/Signupcomponent/confirmation';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Redux/reducer';
//New Additions
// import { createRootNavigator } from "./router";
// import { isSignedIn } from "./auth";

let store  = createStore(reducers, applyMiddleware(thunk))

export default class App extends React.Component {
    //New trial Starts
    //   constructor() {
    //     super(props);
      
    //     this.state = {
    //       signedIn: false,
    //       checkedSignIn: false
    //     };
    //   }

    //   componentDidMount() {
    //     isSignedIn()
    //       .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    //       .catch(err => alert("An error has occured"));
    //   }
    // //NEw trial Ends
  render(){
    //New trial Starts
    // const { checkedSignIn, signedIn } = this.state;

    // // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    // if (!checkedSignIn) {
    //   return null;
    // }

    // const Layout = createRootNavigator(signedIn);
    //New trial Ends
      return(
          <BrowserRouter>
            <div className="App">
              <Navbar clickLogout={this.logout}/>
              <Switch>
                <Route exact path='/' component={Login} />     
                <Route path='/Home' component={Home} /> 
                <Route path='/About' component={About} />
                <Route path='/fetchusers' component={fetchUsers} />
                <Route path='/witness' component={Witness} />
                <Route path='/signupcomponent' component={SignUp} />
                <Route path='/confirmation' component={Confirmation} />
              </Switch>
            </div>
        </BrowserRouter>
        );
      }
    }
  