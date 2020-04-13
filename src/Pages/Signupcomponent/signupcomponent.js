import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted with the following data: ');
        console.log(this.state);

        if(this.state.name !== '' && this.state.password !== '' && this.state.email !== '') {
            this.props.history.push("/confirmation");
        }
    }

    loggingin() {
        this.props.history.push("/logincomponent");
    }


    render(){
        return(            
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name"><b>Please Fill In The Form Below</b><p></p><br /></label>
                    <input 
                        type="text" 
                        id="name" 
                        className="FormField__Input" 
                        placeholder="Enter your full name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <input 
                        type="password" 
                        id="password" 
                        className="FormField__Input" 
                        placeholder="Enter your password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <input 
                        type="email" 
                        id="email" 
                        className="FormField__Input" 
                        placeholder="Enter your email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> 
                        <Link to="/" className="FormField__Link">I'm already a member</Link>
                </div>

            </form>
            </div>


        // <label className="FormField__Label" htmlFor="password">Password</label>

        );
    }

}

export default SignUp