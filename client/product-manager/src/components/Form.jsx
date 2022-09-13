import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Form = () => {
  // create const that will be used to store value once the form is filled out
  const [title,setTitle] = useState("")
  const [price,setPrice] = useState(0)
  const [description,setDescription] = useState("")

  // create a function that will prevent the page to reloading after ever character input, as well as an onSubmit 
  const createProduct = (e) => {
    e.preventDefault();
    const newProduct ={
      title,
      price,
      description
    }
    axios.post("http://localhost:8000/api/newProduct",newProduct)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }


  return ( 
    <fieldset>
      <form onSubmit={createProduct}>
        Product Title: <input onChange={(e => setTitle(e.target.value))}value = {title}/> <br />
        Price: <input onChange={(e => setPrice(e.target.value))} type="Number" value ={price}/> <br />
        Description: <input onChange={(e => setDescription(e.target.value))} value = {description}/> <br />
        <button>Create</button> <br />
      </form>



    </fieldset>

  )
}

export default Form