import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'



function Item({
    prodData:{
        id,
        imgDir,
        nombre,
        precio,
        talle,
        stock
    }
}) {
    return(
                <Card key = {id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgDir} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            Precio: {precio} <br/>
                            Talle: {talle}<br/>
                            Stock: {stock}<br/>
                            detalle: {ItemDetailContainer}
                        </Card.Text>
                        <Button variant="success">Detalles</Button>
                    </Card.Body>
                </Card>)
            }
            
    

export default Item