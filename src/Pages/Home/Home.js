import React, { Component } from 'react';
import axios from 'axios';
import policebadge from '../../policebadge.png';
import policecommunity from '../../policecommunity.png';

export default class Home extends Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    
    fetchingUsers = () => {
        this.props.history.push("/fetchUsers");
    }

    fetchingWitness = () => {
        this.props.history.push("/witness");
    }

    handleSignout = () => {
      this.props.history.push("/");
  }

    //Double check below
    handleSuccessfulAuth(data) {
      this.props.handleLogin(data);
      this.props.history.push("/dashboard");
    }
  
    handleLogoutClick() {
      axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
          this.props.handleLogout();
        })
        .catch(error => {
          console.log("logout error", error);
        });
    }
    // <div className="splash">    
    render() {
      return (
        <div className="splash-c"><br />
            <img src={policecommunity} alt="policecommunity" /><p></p>
            <p className="splash-head">Community service that cares for the protection and the safety of the people. We apprehend criminals
                and suspects in accordance with the community guidelines and the crown's prosecution regulations.</p>
            <br />
            <p className="splash-subhead">Always be satisfied with your job. Briefly review the following guidelines or mission tasks to 
                win the monthly quota. All officers are required to SIGN OFF to avoid any potential harm.</p>
        
        <div className="row">
            <div className="col m4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="policebadge" src={policebadge} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><b>Public Enemy No. 1</b></span><br />
                    <p><button className="fetchUsers" onClick={this.fetchingUsers}>View Active Cases</button></p>
                </div>
            </div>
            </div>
            <div className="col m4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator"  alt="policebadge" src={policebadge} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><b>Witnesses & Protection</b></span><br />
                    <p><button className="fetchUsers" onClick={this.fetchingWitness}>View Witnesses</button></p>
                </div>
            </div>
            </div>
        </div>
        <button className="signOut" onClick={this.handleSignout}>Sign Out</button>
        </div>
      );
    }
  }