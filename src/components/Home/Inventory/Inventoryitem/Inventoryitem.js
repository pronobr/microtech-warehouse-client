import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventoryitem = ({item}) => {
  const navigate =useNavigate()
  const nagivateToDetail = id=>{
    console.log(id)
    navigate(`/inventory/${id}`)
  }
    return (
        <div className='col'>
            <div className="card ">
      <img src={item.img} className="card-img-top w-50 mx-auto" alt="..." />
      <div className="card-body  ">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <h6>Price :{item.price}</h6>
        <span className='fs-5 d-block '>Quantity : {item.quantity}</span>
    <span className='fs-5 d-block'>Supplier name : {item.supplier_name}</span>
        <button onClick={()=>nagivateToDetail(item._id)} type="button" className="btn btn-primary mt-2"> stock update</button>
      </div>
    </div>
        </div>
    );
};

export default Inventoryitem;

<div className="col">
    
  </div>