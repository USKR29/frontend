
import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Productitemdetail } from './Productitemdetail'
  


function Productlist({storeList}) {
  return (
   
  
    <div className='  flex justify-center items-center '>
        
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">  
    
    {storeList.map((store,index)=>(
        
        <div key={index} className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
        
    
    <Image src={'http://192.168.0.106:1337'+store.attributes.simg.data.attributes.url} width={500} height={300} className=' h-80 w-72 object-cover rounded-t-xl'/>
    <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{store.attributes.catgs.data[0].attributes.cname}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{store.attributes.name}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs: {store.attributes.Price}</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                                                    <Dialog>
                                <DialogTrigger asChild>
                                    <Button>Add to cart</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogDescription>
                                        <Productitemdetail storeList={store}/>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>

                            </div>
                </div>
            </div>
  
    </div>
       
    ))}
    </div>

    </div>   
   
  )
}

export default Productlist