import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../useProduct/useProduct';

const InventoryDetails = () => {
    const {inventoryId}  =useParams()
    // const [products,setProducts] =useProduct()
    
    // const [updatequantity,setUpdatequantity] =useState()
    const [inventoryDetail,setInventoryDetail] =useState({})
    const oldQuantity =inventoryDetail.quantity
    const [updateProduct,setUpdateProduct] =useState(oldQuantity)
    useEffect(()=>{
        const url =`https://secure-shelf-68482.herokuapp.com/product/${inventoryId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          setInventoryDetail(data)
          console.log(data)
        })
    },[])
    const handleReduce =() =>{
      const quantity =parseInt(inventoryDetail.quantity)-1
      const updateQuantity =quantity;
    //  const vari =inventoryDetail.quantity;

    // const {quantity,...rest} =inventoryDetail
    // // console.log(quantity,"rest",rest)
    // const previousQuantity =quantity-1
    // setUpdateProduct(previousQuantity)
    // const updateQuantity ={updateProduct,...rest}
    // // console.log(updateProduct,"p")
    // console.log("old",updateProduct)

    //  vari =
    //  setInventoryDetail(inventoryDetail.qua)

      // setUpdateProduct(updateQuantity)
//       console.log(updateQuantity)
     
//       // setInventoryDetail(updateProduct)
//       // console.log(updateProduct)
   
//       const url =`https://secure-shelf-68482.herokuapp.com/product/${inventoryId}`;
      
//       fetch(url, {
//     method: 'PUT',
//           body: JSON.stringify({updateQuantity}),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//          },

// })
// .then(res =>res.json())
// .then(data =>{
//   console.log("pronob")
//   setUpdateProduct(!updateProduct)
// })
const requestOptions = {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({updateQuantity})
};
fetch(`https://secure-shelf-68482.herokuapp.com/product/${inventoryId}`, requestOptions)
  .then(response => response.json())
  .then(data =>console.log(inventoryDetail));

    }
    const handleIncress =(event) =>{
        event.preventDefault();
        const addQuantity =event.target.number.value
        const quantity =inventoryDetail.quantity;
        const updateQuantity =quantity+parseInt(addQuantity)

             
        const url =`https://secure-shelf-68482.herokuapp.com/productincress/${inventoryId}`;
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
           <div className="card mb-3 w-50 mx-auto">
  <img src={inventoryDetail.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{inventoryDetail.name}</h5>
    <p className="card-text px-5">{inventoryDetail.description}</p>
    <p className="card-text"><small className="text-muted"></small></p>
    <p className='fs-5'>Price : {inventoryDetail.price}</p>
    <p className='fs-5'>Quantity : {inventoryDetail.quantity}</p>
    <p className='fs-5'>Supplier name : {inventoryDetail.supplier_name}</p>
  </div>
</div>
<div className=" w-50 mx-auto row">
<div className="col-md-5">
<button onClick={handleReduce} type="button" className="btn btn-primary btn-lg mt-4 ">delivered</button>
</div>
<div className="col-md-7">
   

<form onSubmit={handleIncress}>
<div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Add Product</label>
    <input name='number' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <input className ="btn btn-primary mt-3" type="submit" value="Submit" />
  </div>
</form>






</div>
</div>
        </div>
    );
};

export default InventoryDetails;