import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    let style={
    fontSize:"2rem",
    marginLeft:"1.5rem",
    color:"rebeccapurple",

}

    return (
        <div class="icono-carrito" style={style}>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
        
        
    )
}
