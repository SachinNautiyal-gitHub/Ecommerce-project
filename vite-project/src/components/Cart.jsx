
import "./cart.scss"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from "../Redux/CartSlice"


const Cart = () => {

  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(remove(id));
  }

  return (
   <>
   <div>
    {
      cartItems.map((product)=>{
        return (
          <div className="cartpage">
          <div className='cartcard' key={product.id}>
                <img src={product.image} alt='img'/>
                <p>{product.title}</p>
                <h5>{product.price} $</h5>
                <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
             </div>
           </div>
        )
      })
    }
   </div>
 
   
   
   </>
  )
}

export default Cart
