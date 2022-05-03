import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [errorMessage,setErrorMessage] =useState([])
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const notify = () => toast(" You Are Loged In");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // for google login
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleLogin =(event)=>{
    event.preventDefault();
   
    const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        signInWithEmailAndPassword(email,password)
        if(error){
          setErrorMessage(error.message)
          return;
        }
        if(loading || loading2){
          return <Loading></Loading>
        }

        event.target.reset()
  }
 
  
    if(user){
      
    console.log(user.user.email)
    const url ='http://localhost:5000/login';
    fetch(url,{
  method: "POST",
  headers:{
      'content-type': 'application/json'
  },
  body:JSON.stringify({
    email:user.user.email
  })
   })
.then(res =>res.json())
.then(result =>{
  localStorage.setItem("accessToken", result.token)
  navigate(from, { replace: true });

})

  }
    return (
        <div className='simple-login-container'>
            <h2>Login</h2>
           <form onSubmit={handleLogin}>

  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Email address</label>
    <input name='email' type="email" id="form2Example1" class="form-control" />
    
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
    <input name='password' type="password" id="form2Example2" class="form-control" />
    
  </div>

  <div class="row ">
    <div class="  justify-content-center">
      <p className='text-danger'>{errorMessage}</p>
    </div>

    <div className="d-inline">
   
    <p>New In Here  <Link className='nav-link' to="/register">Register</Link></p>
    </div>
  </div>
  {/* <button type="button" className="btn btn-primary btn-block mb-4 fw-bold">Sign in</button> */}
  <input onClick={notify} className='btn-login fs-6 fw-bold mb-2' type="submit" value="Sign in" />
  </form>
  <button onClick={()=>signInWithGoogle()} type="button" className="btn btn-warning text-white fw-bold">Sign In With Google</button>
  <ToastContainer />
     
        </div>
    );
};

export default Login;