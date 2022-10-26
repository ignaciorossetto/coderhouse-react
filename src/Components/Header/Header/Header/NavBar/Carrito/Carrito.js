import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Carrito.css'

const sessionStorageCarrito = [
    {
      id: 1,
      nombre: 'Almohadon 1',
      precio: 10000
    },
    {
      id: 1,
      nombre: 'Almohadon 1',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'Almohadon 2',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'Almohadon 2',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'Almohadon 2',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'Almohadon 2',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'Almohadon 2',
      precio: 10000
    },
    
  ]

function Carrito() {
  return (
    <div id='carritoAnchor'>
    <a href='#' >
    <ShoppingBasketIcon/>
    </a>
        <p className='carritoCount'>{carritoQuantity()}</p>
    </div>
    
  )
}

const carritoQuantity = () =>{
  return sessionStorageCarrito.length
}

export default Carrito