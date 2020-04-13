import React, { Component } from 'react';
import { render } from 'react-dom';
import person from '../../person.png';

class Witness extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,  
    }
}


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,        //Data gotten from API, storing them into the component items
            })
        });
}

handleSubmit = () => {
    this.props.history.push("/Home");  //Direct to Homepage
}

render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
        return <div>Loading....</div>
    } 
    else {

        return(
            <div>
            <br />
                <div class="nav-wrapper">
                    <div className="brand-logo center">
                        <div className="wit">Witnesses On Case: </div>
                    </div>
                </div>
                        <br />
                        <ul className="collection">
                            
                            {items.map(item => (
                                <li className="collection-item avatar" key={item.id}>
                                <img src= {person} /><p></p>
                                <b>Name:</b> {item.name}
                                <p><b> Contact:</b> {item.phone}</p>
                                <p><b> E-mail: </b> {item.email}</p>
                                </li>
                            ))}
                        </ul>
                        <button 
                            type="submit" 
                            className="home"
                            onClick={this.handleSubmit}
                        >Back to Home</button>        
            </div>
        );
    }
    
}
}

export default Witness;