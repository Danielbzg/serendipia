import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import Index from './components/Index/index.jsx'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path='/list' element={<ItemListContainer greeting={"Nuestros productos"}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/form' element={<Form />}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
