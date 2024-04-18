import React from 'react'
import Link from 'next/link'
import GlobalApi from '../utils/GlobalApi'
import Productlist from '@/components/Productlist';

async function page() {

    const categoryList=await GlobalApi.getCatList();

    const storeList=await GlobalApi.getProducts();

  

  return (

  

    <div className="flex flex-col min-h-screen mt-20">
     
      <main className="flex-1 lg:grid lg:grid-cols-[1fr_3fr] gap-4 p-4 md:p-6">
        <aside>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-base mb-2">Category</h3>
              <div className="space-y-1 ">
                {categoryList.map((catn,index)=>(
                     <div key={index} defaultChecked id="category-1" className='bg-orange-100 rounded-md'>
                     {catn.attributes.cname}
                   </div>
                ))}
               
              </div>
            </div>
          </div>
        </aside>
        <section>
          <h2 className="font-semibold text-2xl mb-4">Products</h2>
          <Productlist storeList={storeList}/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* prdo*/}
            
          </div>
        </section>
      </main>
    </div>


  )
}


export default page