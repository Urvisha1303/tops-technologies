import React from 'react'
import { CartHome } from './Context_hook'
const Header = () => {

    const { cart, setCart } = CartHome()
  return (
      <>
       <button class="btn btn-outline-success" type="submit" >{ cart}
</button>
<button onClick={() => {
                setCart(cart + 1)
            }}>Add To Cart</button>

      </>
  )
}

export default Header