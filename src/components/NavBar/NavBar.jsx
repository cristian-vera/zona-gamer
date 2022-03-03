import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="##">
                    <img src="/images/zona-gamer-logo-sin-fondo.png" alt="logo" />
                </a>
                <CartWidget/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="##">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="##">PS/XBOX</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="##">PC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="##">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;