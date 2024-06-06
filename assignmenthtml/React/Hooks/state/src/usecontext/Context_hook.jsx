import React, { useState, useContext,createContext } from 'react'
 const Addcart = createContext(); 
export const CartHome = () => { 
     return useContext(Addcart) 
}
const Context_hook = ({ children }) => {
    const [cart, setCart] = useState(0)
  return (
      <>
          <Addcart.Provider value={{ cart , setCart}}>
              { children }
          </Addcart.Provider>
      </>
  )
}

export default Context_hook