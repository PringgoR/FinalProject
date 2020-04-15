import React, { Component } from 'react';
import { render } from 'react-dom';
import rowan from '../../rowan.png';
import '../../App.css';

class About extends React.Component {

    handleSubmit = () => {
        this.props.history.push("/Home");  //Direct to Homepage
    }

    handleSignout = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="about">
                <br />
                <h4 className="content-subhead">Welcome to the SSRS Police Community</h4>
                <br />
                <img src={rowan} alt="Picture" />
                <br />
                <br />
                <p className="about-p">A community where we are dedicated to the safety of the community of Salt Switzel Riveria.</p>
                <p className="about-p">Established in 1957, and originally founded by Sir Richard Hammond, our main goals within SSRS is to 
                    ensure the safety of every member of the community. To do so, we are greatfully sponsored by Stark
                    Industries, where our police officers are equipped with the latest, and modernized weapon.</p>
                <p className="about-p"> To carry out our mission, your safety is our priority. You can please donate generously towards our
                    annual SSRS Police Charity fund where your funds will be put into greater use to protect the 
                    community and the happiness of our officers.</p>
                <br />
                <p className="about-p2">Please contact our 24-hour emergency call center at <b>555-0677 </b> for any emergency request.</p>
                <br />
                <p className="about-p2"><b>Remember: If You See Something, Say Something.</b></p>
                <br />
              
            <button className="home" onClick={this.handleSubmit}>Back to Home</button><p></p>   
            <p><button className="signOut" onClick={this.handleSignout}>Sign Out</button>   </p>
        </div>
        );
    }
}

export default About;
