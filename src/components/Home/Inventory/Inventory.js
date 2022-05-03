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
       
       <Footer></Footer>
</div>
    );
};

export default Inventory;


{/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div> */}