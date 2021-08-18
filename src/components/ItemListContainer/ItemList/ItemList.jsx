import React,{useEffect,useState} from 'react'
import Item from './Item/Item.jsx'
import { useParams } from "react-router-dom";
import { getFirestore } from '../../../services/firebaseService.js';

import Spinner from 'react-bootstrap/Spinner'

import './ItemList.css'

function ItemList() {
    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    
    const {categoryId} = useParams() // id categoria
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(true)

            let db = getFirestore()
            let itemsCollection = db.collection('items')
            const dbQuery = categoryId ?  itemsCollection.where('categoria', '==', categoryId) : itemsCollection
            dbQuery.get().then(resp => {
                if (resp.size === 0) {
                    console.log('No se encontro nada')
                }else{
                setItemList(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))}
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return(
        
        <div className="row">
            {loading && <Spinner animation="border" variant="secondary" /> /*loading*/ } 
            {!loading &&itemList.map((item) => (   //recorro los objetos dentro de mi estado "itemList" y para cada objeto lo ingreso en compoente Item
                <div className="col-sm-6 col-lg-3 col-12">
                    <Item key={item.id} prodData= {item}/>
                </div>
            ))} 
        </div>
        
        )
    
    
    
}


export default ItemList
