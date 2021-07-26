import React from 'react'
import { Card,Button } from 'react-bootstrap'



function Item({ prodData }) {
    const {id, nombre, precio, imgDir} = prodData 
    return(
                <Card key = {id} style={{ width: '18rem' }} className="col-md-4">
                    <Card.Img variant="top" src={imgDir} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            Precio: ${precio} <br/>
                        </Card.Text>
                        <Button variant="success">Detalles</Button>
                    </Card.Body>
                </Card>)
            }
            
    

export default Item