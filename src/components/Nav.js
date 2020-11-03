import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';


function Nav() {

const navStyle = {
    color: 'white'
};

  return (
    <div >
        <nav className="nav">
            <h3 className="navbar-logo">Logo</h3>
            <ul className="nav-links">
                 <Link style={navStyle} to="/about">
                     <li>About</li>
                 </Link>
                 <Link style={navStyle} to="/user">
                     <li>USERS</li>
                 </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
