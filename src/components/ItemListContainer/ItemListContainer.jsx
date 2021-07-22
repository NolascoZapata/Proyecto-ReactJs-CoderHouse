import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList/ItemList';
import "./ItemListContainer.css"



const handleCount=(cant)=>{
    return alert(cant);
} 

const ItemListContainer=(props)=>{
    const {greeting, item}=props
    return (
    <div className=" item-list-container">
        <h1>{greeting}</h1>
        <h2>{item}</h2>
        <h2>{item}</h2>
        <h2>{item}</h2>
        <ItemCount stock={5} initial={1} onAdd={handleCount} />
        <ItemList/>
    </div>
    )
}
export default ItemListContainer