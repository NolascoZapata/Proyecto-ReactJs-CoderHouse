import React from 'react'
import { Card,Button } from 'react-bootstrap'



function Item(props) {
    return(
    props.productos.map((infoProd)=>{
    return(
                <Card key = {infoProd.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={infoProd.imgDir} />
                    <Card.Body>
                        <Card.Title>{infoProd.nombre}</Card.Title>
                        <Card.Text>
                            Precio: {infoProd.precio} <br/>
                            Talle: {infoProd.talle}<br/>
                            Stock: {infoProd.stock}<br/>
                        </Card.Text>
                        <Button variant="success">Detalles</Button>
                    </Card.Body>
                </Card>)
            })
            
    )}

export default Item