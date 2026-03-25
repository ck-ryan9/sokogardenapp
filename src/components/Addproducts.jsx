import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {

  // Introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Declarethe additional hooks tomanage the state ofthe application
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Create a function that will handlethe submit action
  const hanndleSubmit = async (e) =>{
    // Prevent thesite from reloading
    e.preventDefault();

    // Set loading hook with amessage
    setLoading(true)

    try{
      // Create a form data
      const formData = new FormData();
      // Append the details to the form data created
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      // Interact with axiosto help you use the method to post
      const response = await axios.post("https://mutukuryan.alwaysdata.net/api/add_product", formData);
      // Set back the loading hook to default
      setLoading(false);

      // Update the success hook with a message
      setSuccess(response.data.message)

      // Clearing the hooks
      setProductName("");
      setProductDescription("");
      setProductcost("");
      setProductPhoto("");
      
      e.target.reset("");

      

    }
    catch(error){
      // Set back the loading hook to default
      setLoading(false);
      // Update the error hook with a message
      setError(error.message);
    }
  }

  

  return (
    <div className='row-justify-content-center mt-4'>
      <div className="col md- p-4 car shadow">
        <h3 className='text-primary'>Welcome to Add Products</h3>

        {/* Bind the loading hook */}
        {loading && <Loader/>}
        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={hanndleSubmit} >
          <input type="text"
          placeholder='Enter The Product Name'
          className='form-control'
          required 
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}/> <br />

          {/* {product_name} */}

          

          <input type="text"
          placeholder='Enter The Product Description'
          className='form-control'
          required 
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/* {product_description} */}

          <input type="number"
          placeholder='Enter The Product Cost'
          className='form-control'
          required 
          value={product_cost}
          onChange={(e) => setProductcost(e.target.value)}/> <br />

          {/* {product_cost} */}

          <label className='text-primary'>Product Photo</label>
          <input type="file"
          className='form-control'
          required
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}
           /> <br />


          <input type="submit"
          value="Add Product"
          className='btn btn-outline-primary' />
          
          
        </form>
      </div>

    </div>
  )
}

export default Addproducts;
