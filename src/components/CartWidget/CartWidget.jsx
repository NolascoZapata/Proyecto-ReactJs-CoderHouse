import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export default function CartWidget() {
    return (
        <div className="icono-carrito" >
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
        
        
    )
}
