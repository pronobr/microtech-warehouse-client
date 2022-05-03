import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Others/Footer/Footer';
import Inventoryitem from './Inventoryitem/Inventoryitem';

const Inventory = () => {
    const [products,setProducts] =useState([])
    useEffect(() =>{
       fetch("http://localhost:5000/products")
       .then(res =>res.json())
       .then(data =>
        {
            setProducts(data)
            console.log(data.slice(0,4))
        })
    },[])
    return (
<div className="">
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


