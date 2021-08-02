import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './ItemDetail.css'
import swal from 'sweetalert'


function ItemDetail({item={}}){
    
    const handleCount=(cant)=>{
        return swal({
            title:`Agregaste ${cant} items de ${item.nombre}`,
            icon:"success",
            timer:"5000",
            button: false,

        })
        
    };
    

    return (
        
        <div className="item-detail" key={item.id}>
                <h4>{item.nombre}</h4>
                <img src={item.imgDir} alt="producto seleccionado"/> 
                <p>Stock: {item.stock}</p>
                <p>Talle: {item.talle}</p>
                <p>Precio: ${item.precio}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={handleCount} />
        </div>
    
    )

}



export default ItemDetail
