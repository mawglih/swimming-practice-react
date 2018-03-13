import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="header__logo">Logo</div>
                <div className="header__nav">
                    <ul className="header__nav-ul">
                        <li className="header__nav-item">
                            <Link to="/main" />Home
                        </li>
                        <li className="header__nav-item">
                            <Link to="/login" />Login
                        </li>
                        <li className="header__nav-item">
                            <Link to="/signup" />SignUp
                        </li>
                        <li className="header__nav-item">
                            <Link to="/logout" />Logout
                        </li>
                        <li className="header__nav-item">
                            <Link to="/training" />Training
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default Header;
