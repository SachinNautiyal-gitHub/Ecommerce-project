


import React, { useEffect, useState } from 'react'
import "./home.scss"
import { add } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';


const Home = () => {
 
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  const fetchproducts = async() =>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data)
  }

  useEffect(()=>{
    fetchproducts();  
 },[])

 const handleadd = (product) =>{
       dispatch(add(product));
 }

  return (
    <>
    <div className='productsWrapper'>
       {
        products.map((product)=>(
             <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <p>{product.title}</p>
                <h5>{product.price} $</h5>
                <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
             </div>
        ))
       }
    </div>


      </>
  )
}

export default Home
