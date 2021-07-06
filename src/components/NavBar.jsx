import React from 'react';
import imglogo from '../assets/img/paginainicio.jpeg'

export default function NavBar() {
    const styleNav={
        display:'flex',
        flexDirection:'row',
        margin:'1rem'
    }
    const imgNavStyle={
        width:'10%',
        marginRight:'2rem'
    }
    const styleNavText = {
        textDecoration:'none',
        margin:'0.5rem',
    }
    
    
    


    return (
        <div style={styleNav}>
                <img src= {imglogo} style={imgNavStyle} alt="logo"/>
                <a href="" style={styleNavText}><p>Home</p></a>
                <a href="" style={styleNavText}><p>Bebés</p></a>
                <a href="" style={styleNavText}><p>Niñas</p></a>
                <a href="" style={styleNavText}><p>Niños</p></a>
                <a href="" style={styleNavText}><p>Ofertas</p></a>
                <a href="" style={styleNavText}><p>Contacto</p></a>
        </div>
        
    )
}

