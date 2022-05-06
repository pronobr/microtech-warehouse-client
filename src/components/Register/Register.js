import React, { useEffect, useState } from 'react';
import "./Register.css";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [registerError, setRegisterError] =useState()
  const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(
    auth
  );
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const notify = () => toast("Aecount Created");
  const handleRegister =(event) =>{
    event.preventDefault();
    const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

       
        if(error){
          const  regError =error.message
          console.log(regError)
          setRegisterError(regError)
          return;
        }
        

        event.target.reset()

       
  }
  if(user){
    notify()
    navigate('/');
  }
    return (
           
        <div className='simple-login-container'>
            <h2>Register</h2>
           <form onSubmit={handleRegister}>

           <div className="form-outline mb-4">
  <label className="form-label" for="form2Example2">Name</label>
    <input name="name" type="text" id="form2Example2" className="form-control" />
    
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Email address</label>
    <input name='email'  type="email" id="form2Example1" className="form-control" />
    
  </div>

  <div className="form-outline ">
  <label className="form-label" for="form2Example2">Password</label>
    <input name="password" type="password" id="form2Example2" className="form-control" />
    
  </div>


  <div className="row">
    <div className="  justify-content-center">
      <p className='text-danger'>{registerError}</p>
    </div>

    <div className="d-inline">
   
    <p>Already Register  <Link className='nav-link' to="/login">Login</Link></p>
    </div>
  </div>
  <input onClick={ () => {
                  
           sendEmailVerification();
         
        
        }} className='btn-login fs-6 fw-bold mb-3' type="submit" value="Sign up" />
        <ToastContainer />
  </form>
        </div>
    );
};

export default Register;