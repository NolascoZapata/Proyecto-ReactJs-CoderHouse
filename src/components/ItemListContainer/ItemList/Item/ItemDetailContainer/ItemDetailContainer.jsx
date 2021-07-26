import React,{useEffect , useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import {getItems} from '../../../../../getItems'

function ItemDetailContainer() {
    const [item, setItem]=useState([])
    useEffect(() => {
        getItems() // simulacion de getItems
        .then(resp => setItem(resp))
    }, [])

    return (
        <div>
            <h2>Item detail container</h2>
             <ItemDetail item= {item} />  {/*paso mi estado "item" a ItemDetail */}
        </div>
    )
}

export default ItemDetailContainer
