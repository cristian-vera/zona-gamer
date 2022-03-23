import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/images/zona-gamer-logo-sin-fondo.png" alt="logo" />
                </Link>
                <div className="navbar_subContent">
                    <CartWidget />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/pc">PC</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/ps_xbox">PS/Xbox</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">CONTACTO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;