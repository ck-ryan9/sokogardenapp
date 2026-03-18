import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    // Initialize the hooks
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
     const [password, setPassword] = useState("");

    //  Define the tree states an applicsation will move to
    const{loading, setLoading} = useState("");
    const{success, setSuccess} = useState("");
    const{error, setError} = useState("");

    // Below is a function that will handle the form submit action
    const handleSubmit = (e) => {
        // Below we prevent our site from reloading
        e.preventDefault()
        // Upadate our loading hook that will dispay to the users who are trying to register
        setLoading("Please wait as registration is in progress...")

        try{

        }
        catch(error){
            
        }

        
    
        


    }

  return (
    <div className='row justify-content-center mt-4'>
        <div className="card col-md-6 shadow p-4">
            <h1 className='text-primary'>Sign Up</h1>

            <h5 className='text-warning'>{loading}</h5>

            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Enter the Username'
                className='form-control'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required /> <br />

                {/* {username} */}

                <input type="email"
                placeholder='Enter the Email Address'
                className='form-control' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required /> <br />
                {/* {email} */}

                <input type="password"
                placeholder='Enter the Password'
                className='form-control' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required /> <br />
                {/* {password} */}

                <input type="number" 
                placeholder='Enter the Phone Number'
                className='form-control' 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                minLength={10} /> <br />

                {phone.length > 0 && phone.length < 10 && <span className='text-danger'>Phone number must be at least 10 digits</span>}
                {/* {phone} */}

                <input type="button" value="SignUp" className='btn btn-primary' /> <br /><br />

                Already have an account? <Link to ={'/signin'}>Sign In</Link>


                
            </form>
        </div>
    </div>
  )
}

export default Signup;