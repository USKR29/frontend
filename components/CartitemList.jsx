import CartContext from '@/context/CartContext'
import { Trash2Icon } from 'lucide-react'
import React, { useContext } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function CartitemList() {
  const rounter = useRouter()

const {deleteItemFromCart, cart} = useContext(CartContext)


  return (
    <div>{cart?.cartItems?.length > 0  && (
        <div className=' flex flex-col gap-5'>
          
            {cart?.cartItems?.map((cartItem) => (
                <div key={cartItem.id} className=' flex justify-evenly' >
                    <div className=' flex flex-col justify-items-center items-center'><Image src={'http://192.168.0.106:1337'+cartItem.image} width={100} height={100} className=' border-2'/></div>
                    <div className=' flex flex-col'>
                      <div className='flex flex-row'><h2 className=' text-xl'>{cartItem.name}</h2></div>
                      <div className='flex flex-row gap-3 justify-items-center items-center'>
                        <div className=' border-2 p-1'>{cartItem.quantity}</div>
                        <div>T: {(cartItem.price)}</div>
                      </div>
                      </div>
                    <button onClick={()=>deleteItemFromCart(cartItem.product, toast('Deleted sucessfully'))  }><Trash2Icon/></button>
                </div>
            ) )}
            
            <div>Total items in cart: {cart?.cartItems?.length || 0 }</div>
            <Button onClick={()=>rounter.push('/checkout')} className='bg-green-500'>Checkout</Button>
        </div>
      )}
        </div>
  )
}

export default CartitemList