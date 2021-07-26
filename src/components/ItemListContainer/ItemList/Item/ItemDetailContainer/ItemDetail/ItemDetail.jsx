import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import { Container } from 'react-bootstrap'
import './ItemDetail.css'

const handleCount=(cant)=>{
    return alert(cant);
} 

function ItemDetail({item={}}){
    const {id,nombre,imgDir,stock,precio}=item 
    console.log(item)

    return (
        <div className="item-detail">
            <Container key={id}>
                <h4>{nombre}</h4>
                <img src={imgDir} alt="producto seleccionado"/> 
                <ItemCount stock={5} initial={1} onAdd={handleCount} />
                <p>Stock:{stock}</p>
                <p>Precio: ${precio}</p>
            </Container>
        </div>
    )
}


export default ItemDetail
