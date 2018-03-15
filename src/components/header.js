import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="header__logo">Logo</div>
                <div className="header__nav">
                    <ul className="header__nav-ul">
                        <li className="header__nav-item">
                            <NavLink activeClassName="selected__link" to="/main">Home</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink activeClassName="selected__link" to="/login">Login</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink activeClassName="selected__link" to="/signup">SignUp</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink activeClassName="selected__link" to="/logout">Logout</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink activeClassName="selected__link" to="/training">Training</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}
export default Header;
