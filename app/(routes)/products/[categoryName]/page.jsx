import GlobalApi from '@/app/utils/GlobalApi'
import Link from 'next/link';
import React from 'react'
import Productlist from '@/components/Productlist';
import Image from 'next/image';
import Catlist from '@/components/Catlist';





async function ProductCategory({params}) {

  const categoryList=await GlobalApi.getCatList();

  const storeList=await GlobalApi.getProductByCategory(params.categoryName)
 
  return (
    <div>
      <Catlist categoryList={categoryList}/>
      <Productlist storeList={storeList}/>
    </div>

  )
}

export default ProductCategory