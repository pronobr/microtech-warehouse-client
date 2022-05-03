import React from 'react';
import Footer from '../Others/Footer/Footer';
import "./AllProductDetails.css";
const AllProductDetails = () => {
    return (
        <div className="mt-5">
            <div className="parant my-5">
            <div className='section px-5 row row-cols-1 row-cols-md-4 g-4'>
           <div className="text-white fw-bold">
           <h3>100 +</h3>
           <h5>Team Member </h5>
           </div>
           <div className="text-white fw-bold">
          <h3>3000 +</h3> 
          <h5>Total Product</h5>
           </div>
           <div className="text-white fw-bold">
               <h3>1,300 +</h3>
               <h5>Happy Customers</h5>
           
           </div>
           <div className="text-white fw-bold">
           <h3>50 +</h3>
           <h5>Categories</h5>
           </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AllProductDetails;