import React,{useEffect , useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import {getItems} from '../../../../../getItems'

function ItemDetailContainer() {
    const [item, setItem]=useState([])
    useEffect(() => {
        getItems() // simulacion de getItems
        .then(resp => setItem(resp))
    }, [])
    const prod1= item[1]
    return (
        <>
            <h2>Detalles del Producto</h2>
            <ItemDetail item={prod1} />  {/*paso mi estado "item" a ItemDetail */}
        </>
    )
}

export default ItemDetailContainer
