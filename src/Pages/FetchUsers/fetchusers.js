import React, { Component } from 'react';
import '../../App.css';

export default class fetchUsers extends React.Component {
    
    state = {
        loading: true,
        // loading2: true,
        person: null,
        // person2: null,
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
        
    }

    handleSubmit = () => {
        this.props.history.push("/Home");  //Direct to Homepage
    }

    handleWitness = () => {
        this.props.history.push("/witness");
    }

    render() {
        return(
            <div>
                {this.state.loading || !this.state.person ? ( 
                    <div>Loading....</div> 
                ) : (
                    <div className="row">
                        <div className="col s1 m1 offset-m1 l1 offset-l1">
                        <div className="card">
                            <div className="card-image">
                                <img src={this.state.person.picture.large} />
                                <span className="wanted">MOST WANTED</span>
                                
                            </div>
                            <div className="card-content">
                                <p fontweight="bold">Bounty Reward: U$ 500,000 DEAD OR ALIVE</p>
                            </div>
                            <div>
                                <div className="att">Details Below: </div> <br />
                                <div className="details">{this.state.person.name.title}. {this.state.person.name.first}, {this.state.person.name.last} </div>
                            </div>
                            <br />
                                <div className="att">Last Known Location: </div>
                                    <div className="details">{this.state.person.location.street.number} {this.state.person.location.street.name}, </div>
                                    <div className="details">{this.state.person.location.city}, {this.state.person.location.state}, {this.state.person.location.postcode} </div>
                                    <div className="details">{this.state.person.location.country}</div>
                                    <br />
                                <div className="att">Age Details: </div>    
                                    <div className="details">{this.state.person.dob.age} years old</div>
                                    <br />
                            </div>
                        </div>
                    </div>
                    
                    )}
                <button 
                    type="submit" 
                    className="home"
                    onClick={this.handleSubmit}
                >Back to Home</button>
                <button 
                    type="submit" 
                    className="home"
                    onClick={this.handleWitness}
                >View Witness List</button>
            </div>
            
            )}
}