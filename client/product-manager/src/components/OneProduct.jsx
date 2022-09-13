import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

import { useParams } from 'react-router-dom'

const OneProduct = () => {

    const [product,setProduct] = useState({})

    const {id} = useParams();

    useEffect(() => { console.log(id);
    axios.get("http://localhost:8000/api/product/" +id)
        .then(result => setProduct (result.data.product) )
        // setOneproduct(request.data);
        // loadOne(true)
        .catch(error => console.log(error))
    },[id])
    console.log(product);

  return (
    <div>

        Title: {product.title}
        Price: $ {product.price}
        Description: {product.description}
    </div>
  )
}

export default OneProduct