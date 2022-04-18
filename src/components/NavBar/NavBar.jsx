import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asyncmock';
import './NavBar.css'

export const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])


    return (
        <nav className="NavBar" >
            <Link className='sinSubrayar' to='/'>
            <div>
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