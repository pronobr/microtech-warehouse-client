import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
const [user, loading, error] = useAuthState(auth);
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <div className="container-fluid mx-5">
  <a className="navbar-brand fw-bold" href="/">Microtech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className='nav-link active' to="/">Home</Link>
        </li>
        <li className="nav-item">
          {
            user?<Link onClick={()=>signOut(auth)} className='nav-link' to="/login">Logout</Link>: <Link className='nav-link' to="/login">Login</Link>
          }
       
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/register">Register</Link> 
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/blog">Blog</Link> 
        </li>
        {
         user?
         <div className="d-md-flex">
           <li className="nav-item">
         <Link className='nav-link' to="/myitem">My Items</Link> 
         </li>
           <li className="nav-item">
         <Link className='nav-link' to="/manageinventories">Manage Inventories</Link> 
         </li>
           <li className="nav-item">
         <Link className='nav-link' to="/additem">Add Item</Link> 
         </li>
         </div>

        :""
        }
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;



