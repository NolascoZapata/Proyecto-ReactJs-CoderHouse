import React,{useEffect,useState} from 'react'
import Item from '../Item/Item'
import {productos} from '../Item/productos.js'


function ItemList() {
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        const items= productos

        const task = new Promise((resuelto, rechazado)=>{
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                    resuelto(items)
                    
                },2000)
            }else{
                rechazado('rechazado')
            }
    
        })   
        const getPromiseTask=()=>{
            return task
        }

        getPromiseTask()
    .then((resp)=> setItemList(resp))    
    .catch(err=> { console.log('un error')})    
    
        
    }, [])   
    console.log(itemList)
    
    

    return(
        <div>
            {itemList.map((item) => (
            <Item key= {item.id} prodData={itemList}/>
)
)
}
        </div>
        
        )
    
    
    
}


export default ItemList
