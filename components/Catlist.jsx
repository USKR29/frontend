import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Catlist({categoryList}) {

    

  return (
      <div className=' overflow-auto border-b-2 border-rose-100'>
        <h1 className=' flex flex-col items-center p-2 text-2xl font-semibold text-red-700'>Categories: </h1>
        <div className=' flex flex-row place-content-center gap-5 p-3'>
          
        {categoryList.map((cat,index)=>(
            <div className=' flex flex-col justify-items-center items-center bg-green-100 gap-3 p-3 w-[200px] rounded-lg hover:bg-green-300 hover:scale-110' key={index}>{
                <Link href={'/products/'+cat.attributes.cname}><div className=''>{cat.attributes.cname}
                <div className=' flex place-content-center'><Image src={'http://192.168.0.106:1337'+cat.attributes.icon.data.attributes.url} width={34} height={34}/></div>
                </div></Link>
            }</div>
        ))}
        </div>

        </div>
        
   
  )
}

export default Catlist