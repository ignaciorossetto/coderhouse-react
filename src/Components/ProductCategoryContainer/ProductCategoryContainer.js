import React, {useEffect, useState} from 'react'
import SpinnerComponent from '../Spinner/Spinner';
import './ProductsCategoryContainer.css'
import { useParams } from 'react-router-dom';
import ProductCategoryList from './ProductCategoryList/ProductCategoryList'
import { collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/firebase"


const ProductCategoryContainer = () => {


  const {category} = useParams()
  const [itemList, setItemList] = useState([])
  const [itemListBool, setItemListBool] = useState(false);


  useEffect(()=>{
    setItemListBool(false)


    const querySnapshot = async() => {

      const q = query(collection(db, "products"), where("category", "==", category));

      const docs = await getDocs(q)
      let productsArray = []
      docs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        productsArray.push({...doc.data(), id: doc.id})
      });
      productsArray.sort((p1,p2)=> p1.product_id - p2.product_id)
      setItemListBool(true)
      setItemList(productsArray)
      return
    }

    querySnapshot()
    
  }, [category])
  return (
    <>

    {
      itemListBool ? 
      <div className='productsContainer'> 
        <ProductCategoryList products={itemList} className=''/>
      </div> : 
      <div className='spinnerContainer'>
        <SpinnerComponent className='d-flex justify-content-center'/>
      </div>

    }

  </>
  )
}

export default ProductCategoryContainer