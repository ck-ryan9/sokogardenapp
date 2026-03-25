import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

    // Initialize hooks to help you manage the state of your application
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Declare the navigate hook
    const navigate = useNavigate();

    // Below we specify the image URL
    const img_url = "https://mutukuryan.alwaysdata.net/static/images/";

    // Create a function that will help you fetch the products from the API
    const fetchProducts = async () =>{
      try{
        // Set the loading hook with a message
        setLoading(true);
        // Interact with your endpoint for fetching produccts
        const response = await axios.get("https://mutukuryan.alwaysdata.net/api/get_products");
        // Update the products hook with the response you get back from the API
        setProducts(response.data);
        // Set back the loading hook to default
        setLoading(false);
      }
      catch(error){
        
        // Set back the loading hook to default
        setLoading(false);
                // Set the error hook with the error message
        setError(error.message);
      }
    }
    
    // Weshall use the useEffect hook to automatically ree-render new featurees incase of any changes.
    useEffect(()=> {
      fetchProducts();
    }, [])

    // console.log("The products fetched are:",products)



  return (
    <div className='row'>
      <h3 className="text-info">Available Products</h3>
      {loading && <Loader />}
      <h4 className="text-danger">{error}</h4>

      {/* Map the products fetched from the API to the user interface */}

      {products.map((product) => (
         <div className="col-md-3 justify-content-center mb-3">
        <div className="card shadow">
          <img
           src={img_url + product.product_photo}
            alt="Product Name"
            className='product_img mt-3' />

          <div className="card body">
            <h5 className="text-success">{product.product_name}</h5>
            <p className="text-dark">{product.product_description.slice(0, 70)}...</p>

            <h4 className="text-warning">Ksh {product.product_cost}</h4>

            <button className="btn btn-outline-info" onClick={ () => navigate("/makepayment", {state : {product}}) }>Purchase Now</button>
          </div>
        </div>
        
        </div>
      
      )  )}

     
    </div>
  )
}

export default Getproducts;