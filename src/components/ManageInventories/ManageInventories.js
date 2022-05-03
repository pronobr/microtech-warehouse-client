import { prettyDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import useProduct from '../useProduct/useProduct';

const ManageInventories = () => {
    const [items,setItems]  =useState([])
    const [products,setProducts] =useProduct()
    useEffect(()=>{
        const url ="http://localhost:5000/products"
        fetch(url)
        .then(res =>res.json())
        .then(data =>setItems(data))
    },[])
    const handleDelete = id =>{
        const proceed =window.confirm("Are you Sure To Delete")
        if(proceed){
            const url =`http://localhost:5000/delete/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                const remaining = products.filter(product =>product._id !==id)
                setItems(remaining)

            })

        }
    }
    return (
       
        <div className="container">
            <div className='row row-cols-1 row-cols-md-3 g-4 '>
          {
              items.map(pd =>
                <div class="col">
                     <div class="card mt-5">
  <img src={pd.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{pd.name}</h5>
    <p class="card-text px-5">{pd.description}</p>
    <p class="card-text"><small class="text-muted"></small></p>
    <p className='fs-5'>Quantity : {pd.quantity}</p>
    <p className='fs-5'>Supplier name : {pd.supplier_name}</p>
    <button onClick={() =>handleDelete(pd._id)} type="button" class="btn btn-danger">Delete</button>
  </div>
     </div>
                </div>

                )
          }
        </div>
        </div>
    );
};

export default ManageInventories;