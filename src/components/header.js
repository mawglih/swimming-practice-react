import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__logo">Logo</div>
                <div className="header__nav">
                    <div className="header__nav-item">
                        <NavLink activeClassName="selected__link" to="/main">Home</NavLink>
                    </div>
                    <div className="header__nav-item">
                        <NavLink activeClassName="selected__link" to="/login">Login</NavLink>
                    </div>
                    <div className="header__nav-item">
                        <NavLink activeClassName="selected__link" to="/signup">SignUp</NavLink>
                    </div>
                    <div className="header__nav-item">
                        <NavLink activeClassName="selected__link" to="/logout">Logout</NavLink>
                    </div>
                    <div className="header__nav-item">
                        <NavLink activeClassName="selected__link" to="/training">Training</NavLink>
                    </div>
                </div>
            </div>
        );
    }

}
export default Header;
