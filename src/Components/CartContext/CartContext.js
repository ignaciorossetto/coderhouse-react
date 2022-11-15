import React, { createContext, useState, useEffect } from "react";
import './CartContext.css'


export const Cartcontext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [freeShipping, setFreeShipping] = useState(20000)
  const [quantity, setQuantity] = useState(0)
  const [totalRender, setTotalRender] = useState(``)
  const [cartAndClientInfo, setCartAndClientInfo] = useState({})
  const [isChecked, setIsChecked] = useState(false)

  useEffect(()=>{

    const countCart = () =>{
      let counter = 0
      if(cart.length === 0){
        return setQuantity(counter)
      } else {
        cart.map((product)=>counter += product.amount)
        return setQuantity(counter)
      }
    }
    const calculateTotal = () => {
      
      if(cart.length === 0){
        return setTotalRender(<h4 className="carritoTotal">Carrito Vacio!</h4>)
      } else {
        let _total = 0
        cart.map((product)=> {
          return _total += (product.price * product.amount)})
        if(_total >= freeShipping){
          return setTotalRender(<h4 className="carritoTotal">Total: ${_total.toLocaleString()} ENVIO GRATIS!!</h4>)
        } else {
          return setTotalRender(<h4 className="carritoTotal">Total: ${_total.toLocaleString()}</h4>)
        }
        
      }
     }

    countCart()
    calculateTotal()
  }, [cart])


  const checkCart = () => console.log(cart);

  const addToCart = (id, name, price, image, quantity) => {
    if(isInCart(id)){
      const oldItem = cart.findIndex(itemCart => itemCart.id === id)
      cart[oldItem].amount += quantity 
      const newCart = cart.filter(item => item.id !== id)
      setCart([...newCart, cart[oldItem]])
    } else {
        setCart([...cart, 
          {'id':id,
            'name': name,
            'price': price,
            'image': image,
            'amount': quantity
        }])
    }
  }

 



  const isInCart = (id) => {
    const result = cart.some(product => product.id === id)
    return result
   }

   const deleteFromCart = (id) => {
      const oldItem = cart.findIndex(itemCart => itemCart.id === id)
      if(cart[oldItem].amount === 1){
        const newCart = cart.filter(item => item.id !== id)
        setCart([...newCart])
      } else {
        cart[oldItem].amount -= 1
        const newCart = cart.filter(item => item.id !== id)
        setCart([...newCart, cart[oldItem]])
      }
   }
  
   const deleteCart = () => {
    setCart([])
   }




   
   
  return (<Cartcontext.Provider value={{cart, freeShipping, setCart, checkCart, addToCart, quantity, deleteCart, deleteFromCart, totalRender, setCartAndClientInfo, cartAndClientInfo, isChecked, setIsChecked}}>
    {children}
    </Cartcontext.Provider>)
};

export default CartProvider;
