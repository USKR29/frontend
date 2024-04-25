import React from 'react'
import Link from 'next/link'
import GlobalApi from '../utils/GlobalApi'
import Productlist from '@/components/Productlist';
import Catlist from '@/components/Catlist';

async function page() {

    const categoryList=await GlobalApi.getCatList();

    const storeList=await GlobalApi.getProducts();
  

  return (
    <div >
      <Catlist categoryList={categoryList} />
      <Productlist storeList={storeList}/>
    </div>


  )
}


export default page