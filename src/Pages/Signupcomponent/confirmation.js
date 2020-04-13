import React, { Component } from 'react';
import '../../App.css';
import Login from '../LoginComponent/logincomponent';

class Confirmation extends React.Component {

    handleLogIn = () => {
        this.props.history.push("/");  //Direct to Login
    }

    render() {
        return(
            <div className="l-box">
                <h4>Thank you for registering.</h4> <br/>
                    <h4>To ensure safety, please re-login by clicking the button below.</h4> 
                <br />
                <button type="submit" className="FormField__Button mr-20" onClick={this.handleLogIn}>Log In</button> 
            </div>
        );
    }
}

export default Confirmation