import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Others/Footer/Footer';
import Inventoryitem from './Inventoryitem/Inventoryitem';

const Inventory = () => {
    const [products,setProducts] =useState([])
    useEffect(() =>{
       fetch("https://secure-shelf-68482.herokuapp.com/products")
       .then(res =>res.json())
       .then(data =>
        {
          const sliceProduct =data.slice(0,6)
            setProducts(sliceProduct)
            
        })
    },[])
    return (
<div className="py-5">
<div className="container my-5">
            <div className=' row row-cols-1 row-cols-md-3 g-2'>
            {
                products.map(item =><Inventoryitem key={item._id} item ={item}></Inventoryitem>)
            }
        </div>
        <Link className='nav-link btn btn-primary text-center w-25 mx-auto text-white my-3' to="/manageinventories">Manage Inventories</Link> 
       </div>
       
       
</div>
    );
};

export default Inventory;


