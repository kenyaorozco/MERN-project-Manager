// import axios from 'axios'
import React from 'react'
// import { useEffect,useState } from 'react'
import {Link, Route, Routes, useParams} from 'react-router-dom'
import OneProduct from './OneProduct'

const DisplayProducts = (props) => {

  // const [product,setProduct] = useState({})

  // const {id} = useParams();



  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/product/" +id)
  //   .then(result => setProduct (result.data)
  //     // setOneproduct(request.data);
  //     // loadOne(true)
  //   )
  //   .catch(error => console.log(error))
  // },[id])

  return (
    <div>
        <h2>All Products: </h2>
          {props.allProducts.map( (product) => 
            <Link to={"/product/"+product._id} key={product._id}>
            <p key={product._id}> {product.title}</p></Link>
            )}
      
    </div>

  )
}

export default DisplayProducts