import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asyncmock';
import './NavBar.css'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

export const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])


    return (
        <nav className="NavBar" >
            <Link className='sinSubrayar' to='/'>
            <div className='LogoName'>
                <img src='./images/logo192.png' className="estiloLogo" alt="logo" />
                <h1 className="title">Serendipia</h1>
            </div>
            </Link>
            <div className="Categories orgSecciones">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'botonSelected' : 'botonMenu'}>
                    {cat.description}</NavLink>)}
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar