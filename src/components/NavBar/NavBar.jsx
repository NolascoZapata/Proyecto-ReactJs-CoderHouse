import React from 'react';
import imglogo from '../../assets/img/paginainicio.jpeg'
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

export default function NavBar() {
return (
    
<div>
    <nav className="navbar navbar-expand-md navbar-light bg-none">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#"><img src={imglogo} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse div-links" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/#">Bebés</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Niñas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Niños</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Contacto</a>
                    </li>
                    <CartWidget/>

                </ul>
            </div>
        </div>
    </nav> 
    
</div>

)
}