import React from 'react'
import Proximamente from '../../Proximamente/Proximamente'
import ProductCategory from './ProductCategory/ProductCategory'

const ProductCategoryList = ({products}) => {
    let productByCategoryList = products ?? []

  return (
    <>

    {
      productByCategoryList.length === 0 ? <Proximamente/> :
    
    productByCategoryList.map((product)=>(
        <ProductCategory item={product} key={product.id}/>
    ))
    
    }
    </>
  )
}

export default ProductCategoryList