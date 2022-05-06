import { prettyDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import useProduct from '../useProduct/useProduct';
import { useNavigate } from 'react-router-dom';
const ManageInventories = () => {
    const navigate =useNavigate()
    const nagivateToDetail = id=>{
      console.log(id)
      navigate(`/inventory/${id}`)
    }
    const [items,setItems]  =useState([])
    const [products,setProducts] =useProduct()
    useEffect(()=>{
        const url ="https://secure-shelf-68482.herokuapp.com/products"
        fetch(url)
        .then(res =>res.json())
        .then(data =>setItems(data))
    },[])
    const handleDelete = id =>{
        const proceed =window.confirm("Are you Sure To Delete")
        if(proceed){
            const url =`https://secure-shelf-68482.herokuapp.com/delete/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                const remaining = items.filter(product =>product._id !==id)
                setItems(remaining)

            })

        }
    }
    return (
       
        <div className="container">
            <div className='row row-cols-1 row-cols-md-3 g-4 '>
          {
              items.map(pd =>
                <div className="col">
                     <div className="card mt-5">
  <img src={pd.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{pd.name}</h5>
    <p className="card-text px-5">{pd.description}</p>
    <p className="card-text"><small className="text-muted"></small></p>
    <p className='fs-5'>Price : {pd.price}</p>
    <p className='fs-5'>Quantity : {pd.quantity}</p>
    <p className='fs-5'>Supplier name : {pd.supplier_name}</p>
   <div className="d-flex align-items-center justify-content-center ">
   <button onClick={() =>handleDelete(pd._id)} type="button" className="btn btn-danger me-5">Delete</button>
    <button onClick={()=>nagivateToDetail(pd._id)} type="button" className="btn btn-primary mt-2"> stock update</button>
   </div>
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