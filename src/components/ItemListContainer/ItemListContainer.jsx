import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        /* getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        }) */
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    }, [categoryId])

    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer