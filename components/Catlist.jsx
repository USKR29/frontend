import React from 'react'

function Catlist({categoryList}) {

    

  return (
<div className=' w- h-full flex flex-col '>
    <div className=' w-[800px] bg-black  flex flex-col items-center justify-evenly overflow-auto rounded-3xl'>

        {categoryList.map((cat,index)=>(
            <div className='flex gap-3 my-8 md:my-12 flex-wrap justify-center px-4 md:px-8 max-w-sm' key={index}>{
                <div className='px-2 py-1 md:text-lg relative bg-orange-300 rounded-lg select-none hover:shadow hover:shadow-teal-500 hover:outline hover:outline-teal-600'>{cat.attributes.cname}</div>
            }</div>
        ))}
        
    </div>
    </div>
  )
}

export default Catlist