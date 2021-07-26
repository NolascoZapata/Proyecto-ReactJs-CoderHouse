import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import { Container } from 'react-bootstrap'

const handleCount=(cant)=>{
    return alert(cant);
} 

function ItemDetail({
item:{
    nombre,
    imgDir,
    stock,
    precio
}
}){
    
    return (
        <>
            <Container>
                <h4>Item Detail {nombre}</h4>
                <img src={imgDir}></img> 
                <ItemCount stock={stock} initial={1} onAdd={handleCount} />
                <p>Stock:{stock}</p>
                <p>Precio: ${precio}</p>
            </Container>
        </>
    )
}

export default ItemDetail
