import React from 'react'
import Link from 'next/link'
import GlobalApi from '../utils/GlobalApi'
import Productlist from '@/components/Productlist';
import Catlist from '@/components/Catlist';
import { Toaster } from 'sonner';

async function page() {

    const categoryList=await GlobalApi.getCatList();

    const storeList=await GlobalApi.getProducts();
  

  return (
    <div >
      <Catlist categoryList={categoryList} />
      <Productlist storeList={storeList}/>
      <Toaster position='top-right'/>
    </div>


  )
}


export default page