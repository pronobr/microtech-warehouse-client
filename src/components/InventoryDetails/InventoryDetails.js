import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../useProduct/useProduct';

const InventoryDetails = () => {
    const {inventoryId}  =useParams()
    const [products,setProducts] =useProduct()
    const [inventoryDetail,setInventoryDetail] =useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/product/${inventoryId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setInventoryDetail(data))
    },[])
    const handleReduce =() =>{
      console.log()

        const quantity =inventoryDetail.quantity;
        const updateQuantity =quantity-1
        
        const url =`http://localhost:5000/product/${inventoryId}`;
        
        fetch(url, {
  method: 'PUT',
  body: JSON.stringify({updateQuantity}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  
})
  .then((response) => response.json())
  .then(data =>{
    
    // console.log(data)
    // const remaining =products.find( items =>items._id ==data._id)
    // const update =products.map(items => console.log(items))
    // const update =products.find(itemId =>itemId._id ==data._id)
    // const updatedProduct =products.filter(item =>item._id ==update)
    // setInventoryDetail()
    // console.log(updatedProduct)
    // console.log(update)

  });

        // body:JSON.stringify(updateQuality)
    }
    const handleIncress =(event) =>{
        event.preventDefault();
        const addQuantity =event.target.number.value
        const quantity =inventoryDetail.quantity;
        const updateQuantity =quantity+parseInt(addQuantity)

             
        const url =`http://localhost:5000/productincress/${inventoryId}`;
        fetch(url, {
       method: 'PUT',
       body: JSON.stringify({updateQuantity}),
     headers: {
    'Content-type': 'application/json; charset=UTF-8',
     },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
        
    }
    return (
        <div className='my-5'>
           <div class="card mb-3 w-50 mx-auto">
  <img src={inventoryDetail.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div class="card-body">
      <small className='fs-5'>Id:{inventoryDetail._id}</small>
    <h5 class="card-title">{inventoryDetail.name}</h5>
    <p class="card-text px-5">{inventoryDetail.description}</p>
    <p class="card-text"><small class="text-muted"></small></p>
    <p className='fs-5'>Quantity : {inventoryDetail.quantity}</p>
    <p className='fs-5'>Supplier name : {inventoryDetail.supplier_name}</p>
  </div>
</div>
<div className=" w-50 mx-auto row">
<div className="col-md-5">
<button onClick={handleReduce} type="button" class="btn btn-primary btn-lg mt-4 ">delivered</button>
</div>
<div className="col-md-7">
   

<form onSubmit={handleIncress}>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Add Product</label>
    <input name='number' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <input type="submit" value="Submit" />
  </div>
</form>






</div>
</div>
        </div>
    );
};

export default InventoryDetails;