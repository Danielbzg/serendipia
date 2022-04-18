import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path='/list' element={<ItemListContainer greeting={"Nuestros vinos"}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>Estás en el carrito, que aún está en proceso de creación</h1>}/>
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
