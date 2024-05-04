"use client"

import GlobalApi from '@/app/utils/GlobalApi';
import CartContext from '@/context/CartContext'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'


function Checkout() {
const [cartItems, setCartItems]=useState([]);
const [fetchedProducts, setFetchedProducts] = useState([]);
{/*const {cart} = useContext(CartContext);*/}

  const storeditem = JSON.parse(localStorage.getItem('cart'));
 


   
useEffect((id) => {
  const productIds = storeditem.cartItems.map((item)=>item.product)
  const params = new URLSearchParams();
  params.append('',productIds.join(','));
  const apiUrl = `http://localhost:1337/api/stores?filters[id]=${params}`;
  const fetchData = async () => {
    try{
      const respose = await axios.get(apiUrl)
      const data = await respose.json();
      setFetchedProducts(data.products);
    } catch(error){
      console.error(error);
    }
  };
  fetchData();
}, [cartItems]);


  
  return (
    <div>
      {console.log(fetchedProducts)}
    </div>
  )
}

export default Checkout


const SingleProduct = () =>{
  const storeditem = JSON.parse(localStorage.getItem('cart'));
  const { id } = storeditem.cartitem.product
  return id
}