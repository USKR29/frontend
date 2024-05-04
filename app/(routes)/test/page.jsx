"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page() {
    const [storeData, setStoreData]=useState([])
    const cartItems = JSON.parse(localStorage.getItem('cart'))

    useEffect(() => {
        const fetchData = async () => {
          const promises = cartItems.map(async (item) => {
            try {
              const response = await axios.get(`http://localhost:1337/api/stores?filters[id]=${item.cartItems.product}`);
              if (!response.ok) {
                throw new Error('Failed to fetch store data');
              }
              return await response.json();
            } catch (error) {
              console.error('Error fetching store data:', error);
              // Handle errors gracefully, e.g., display an error message
              return null; // Or provide a default value
            }
          });
      
          const fetchedData = await Promise.all(promises);
          setStoreData(fetchedData.filter(Boolean)); // Filter out null values
        };
      
        if (cartItems.length > 0) { // Only fetch data if cart items exist
          fetchData();
        }
      
        // Dependency array to trigger re-fetch on cartItems change
      }, [cartItems]);
  return (
    <div>{console.log(storeData)}</div>
  )
}

export default page