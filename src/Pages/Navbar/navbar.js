import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
        return(
       
            <nav className="nav-wrapper blue-grey darken-3">
                <div className="container">
                    <a className="title">SSRS Police Services</a>
                    <ul className="right">
                        <li><Link to="/">Sign In</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul> 
                </div>
            </nav>
    )
}

export default withRouter(Navbar)