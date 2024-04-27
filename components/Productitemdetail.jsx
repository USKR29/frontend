"use client"
import Image from 'next/image'

import { Button } from './ui/button'
import { ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '@/context/CartContext'

export const Productitemdetail = ({storeList}) => {

 const { addItemToCart} = useContext(CartContext)

    const [productTotalPrice,setProductToltalPrice]=useState(
        storeList.attributes.Price
    )

    const [quantity,setQuantity]=useState(1);

    const addToCartHandler = () => {
      addItemToCart({
        product: storeList.id,
        itemprice: storeList.attributes.Price ,
        name: storeList.attributes.name,
        price: (quantity * productTotalPrice).toFixed(2),
        image: storeList.attributes.simg.data.attributes.url,
        quantity:quantity,

      })

    }

   
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 bg-white text-black gap-10'>
       <div className=' felx flex-col items-center place-content-center'>
       <Image src={'http://192.168.0.106:1337'+storeList.attributes.simg.data.attributes.url} alt='img' width={300} height={300} className=' bg-slate-200 rounded-lg '/>
        </div> 
        <div>
        <div className=' flex flex-col gap-4'>
            <h2 className=' text-3xl font-bold'>{storeList.attributes.name}</h2>
            <p className=' text-justify'>{storeList.attributes.Description}</p>
            <div className='flex flex-col items-baseline'>
            <h2 className=' font-bold'>Price: INR {storeList.attributes.Price}</h2><br/>
            <h2>Quantity</h2>
            <div>
            <div className=' flex p-2 gap-10 items-center border px-3'>
                    <button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>-</button>
                    <h2>{quantity}</h2>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
            </div>
                
            </div>
            <h2>Total Price: INR {(quantity * productTotalPrice).toFixed(2) }</h2>
            <Button className=' flex gap-3' onClick={addToCartHandler}>
            
                <ShoppingBasket/>Add to cart</Button>
                <h2 className=' items-baseline'>Category: <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700"> {storeList.attributes.catgs.data[0].attributes.cname}</span></h2>
        </div>
        </div>
        
    </div>
  )
}
