import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Declare the 3 additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below we have the use navigate hook to redirect us to another page on successful login/signin
  const navigate = useNavigate();

  // Below is a function that will handle the form submit action
  const handleSubmit = async (e) => {
    // Below we prevent our site from reloading
    e.preventDefault();

    // Update the loading hook with a message
    setLoading("Please wait as we authenticate your account...");

    try{
      // Create a form data object that will enable you to capture the two details entered on the form
      const formData = new FormData();
      // Inser/ appemd the email and passwordo  the formdata created
      formData.append("email", email);
      formData.append("password", password);
      // By use of axios we can access the post method
      const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin", formData);
      // Set back the loading book to default
      setLoading("");

      // Check whether theuser exists as apart of your response from the API
      if(response.data.user){
        //  If user is there, definately the details entered are correct
        setSuccess("Login Successfull")
        // If it is successfull, let a person get redirected to another page
        navigate("/");
      }
      else{
        // If user is not there, definitely the details entered are wrong
        setError("Invalid Email or Password")
      }

    }
    catch(error){
      // Set back the loading hook to default
      setLoading("")
      // Update the error hook with the message back from the response
      setError("Oops Something went wrong, please try again..")
    }

    }

    
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h1 className='text-success'>Sign In</h1>
        <h5 className='text-info'>{loading}</h5>
        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>
        

        <form onSubmit={handleSubmit}>
          <input type="email"
          placeholder='Enter the Email Address Here'
          className='form-control'
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/> <br />
          {/* {email} */}

          <input type="password"
          placeholder='Enter the Password Here'
          className='form-control'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />
          {/* {password} */}

          <input type="submit"
          value="Sign In"
          className='btn btn-success' /> <br /><br />

           Don't  have an account? <Link to={'/signup'}>Register</Link>
        </form>
      </div>
    </div>
  )
}

export default Signin;