import React from 'react';
import imglogo from '../assets/img/paginainicio.jpeg'
import CartWidget from "../components/CartWidget";

export default function NavBar() {
    const styleLinks={
        marginLeft: "3rem",
        fontSize:"1.5rem"
    }
return (
    
<div>
    <nav class="navbar navbar-expand-md navbar-light bg-none">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={imglogo} alt="logo" width="144px" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" style={styleLinks}>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Bebés</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Niñas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Niños</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ofertas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <CartWidget/>

                </ul>
            </div>
        </div>
    </nav>
</div>

)
}