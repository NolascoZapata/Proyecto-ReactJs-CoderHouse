import React,{useEffect,useState} from 'react'
import {getItems} from '../../../getItems'
import Item from './Item/Item.jsx'
import ItemDetailContainer from './Item/ItemDetailContainer/ItemDetailContainer'


function ItemList() {
    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    useEffect(() => {
    
        getItems() // simulacion de carga de productos
    
    .then((resp)=> setItemList(resp))    
    .catch(err=> { console.log('un error')})     
    
        
    }, [])
    
    

    return(
        <div className="row">
            {itemList.map((item) => (   //recorro los objetos dentro de mi estado "itemList" y para cada objeto lo ingreso en compoente Item
            <Item key= {item.id} prodData={item}/>))} 
            <ItemDetailContainer/> 
        </div>
        
        )
    
    
    
}


export default ItemList
