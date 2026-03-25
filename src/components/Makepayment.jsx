import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader';

const Makepayment = () => {

    // Destructure the details passed from the get products component
    // The useLocation hook helps us to access the details passed from the get products component
    const {product} = useLocation().state || {};

     // Declare the navigate hook
    const navigate = useNavigate();

    // console.log("The product details passed are:", product)
     // Below we specify the image URL
    const img_url = "https://mutukuryan.alwaysdata.net/static/images/";

    // Initialize hooks to manage the state of your application
    const [number, setNumber] = useState("");
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");


    //   Create a function that will handle the form submit action
    const handleSubmit = async (e) => {
        // Prevent the site from reloading
        e.preventDefault();

        
        // Update the loading hook
        setLoading(true);

        try{
            // Create a form data object
            const formData = new FormData();
            // Append the details to the form data created
            formData.append("phone", number);
            formData.append("amount", product.product_cost);

            const response = await axios.post("https://mutukuryan.alwaysdata.net/api/make_payment", formData);

            // Set back the loading hook to default
            setLoading(false);

            // Update the success hook with a message
            setSuccess(response.data.message);
        }
        catch(error){
            // Set back the loading hook to default
            setLoading(false);

            // Update the error hook with a message
            setError(error.message);

        }

    
    }

    // Create a function that will handle the form submit action
  return (
    <div className='row justify-content-center'>
        {/* <button className='btn btn-outline-primary'>Back to Products</button> */}
        <h1 className='text-success'>Make Payment - Lipa Na M-Pesa</h1>

        <div className="col-md-1">
            <input type="button"
            className='btn btn-primary'
            value=" <- Back "
            onClick={() => navigate("/")} />
        </div>

        <div className=" col-md -6 card shadow p-4">

            
            <img src={img_url + product.product_photo} alt="Product Name" className='product_img' />
            <div className="card body"> 
                <h2 className="text-info">{product.product_name}</h2>

                <p className="text-dark">{product.product_description}</p>

                <b className="text-warning">Ksh.{product.product_cost}</b><br />

                <form onSubmit={handleSubmit}>

                      {/* Bind the loading hook */}
        {loading && <Loader/>}
        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>


                    <input type="number"
                     placeholder="Enter The Phone Number 254XXXXXXXX"
                     className="form-control"
                     required
                     value={number}
                     onChange={(e) => setNumber(e.target.value)}
                     /> <br />
                     {/* {number} */}

                     <input type="Submit"
                     value="Make Payment"
                     className="btn btn-success"
                     />
                </form>
            </div>
        </div>

    </div>
  )
}

export default Makepayment