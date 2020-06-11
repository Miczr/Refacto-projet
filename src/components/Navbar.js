import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="nav">
            <nav className="header-menu">
                <Link to="/">
                <a href="#">Accueil</a>
                </Link>

                <Link to="/About">
                <a href="#">About</a>
                </Link>

                <Link to="/Projets">
                <a href="#">Projets</a>
                </Link>
                
                <Link to="/Contact">
                <a href="#">Contact</a>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;