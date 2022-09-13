import './App.css';
import {useState,useEffect} from 'react'
import {Link, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import DisplayProducts from './components/DisplayProducts';
import axios from 'axios';
import OneProduct from './components/OneProduct';

function App() {
// Will be used to map out the products created using our form 
  const [allProducts,setAllProducts] = useState([])

  const [loaded,setLoaded] = useState([])

    useEffect(() => {
      axios.get("http://localhost:8000/api/products")
        .then( result =>{
          setAllProducts (result.data);
          setLoaded(true)
        })
        .catch( err => console.log("whoops error in the App.js",err))
    },[])






  return (
    <div className="App">
      
        <h1>Product Manager</h1>
        <Form />
        {loaded && <DisplayProducts  allProducts={allProducts}/>}
      <Routes >
      <Route element={<OneProduct/>} path="/product/:id" />
      </Routes> 

    </div>
  );
}

export default App;
