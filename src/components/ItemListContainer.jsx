import React from 'react'

const ItemListContainer=(props)=>{
    const {greeting, item}=props
    return (
    <div>
        <h1>{greeting}</h1>
        <h2>{item}</h2>
        <h2>{item}</h2>
        <h2>{item}</h2>
    </div>
    )
}
export default ItemListContainer