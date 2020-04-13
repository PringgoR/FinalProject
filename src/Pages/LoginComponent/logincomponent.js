import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../Signupcomponent/signupcomponent';
import '../../App.css';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
            console.log('Form is submitted with the following data: ');
            console.log(this.state);
        
        if (this.state.email === 'johndoe@example.com' && this.state.password === '12345'
            || this.state.email === 'hulk@test.com' && this.state.password === 'hulk123') {
                this.props.history.push("/Home");
        }
    }

    handleSignUp(e) {
        this.props.history.push("/signupcomponent");  //Direct the user to Sign Up
    }

    render() {
        return(
            <div className="FormCenter"><b>Log In</b><p><br /></p>
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" 
                    id="email" 
                    className="FormField__Input" 
                    placeholder="Enter your email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    errorText={this.state.emailError} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    className="FormField__Input" 
                    placeholder="Enter your password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    errorText={this.state.passwordError} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign In</button> 
                        <Link to="/signupcomponent" className="FormField__Link">Create an account</Link>
            
              
              </div>
            </form>
            </div>
        );
    }
}

export default Login
