import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import useProduct from '../useProduct/useProduct';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [products,setProducts] =useProduct()
    const [myItems,setMyItenms] =useState([])
    // const [items,setItems]  =useState([])
    const email =user.email
    useEffect(() =>{
        const url =`http://localhost:5000/myitem/${email}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            console.log("my",data)
            setMyItenms(data)
        })
    },[user])
    const handleDelete = id =>{
        const proceed =window.confirm("Are you Sure To Delete")
        if(proceed){
            const url =`http://localhost:5000/delete/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(data =>{
                const remaining = myItems.filter(product =>product._id !==id)
                // setItems(remaining)
                setMyItenms(remaining)
                // const remaining = data
                // setMyItenms(data)

            })

        }
    }
    return (
        <div className="mt-5 container">
            <h2>My Items</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
              myItems.map(pd =>
                <div class="col">
                     <div class="card mt-5">
  <img src={pd.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{pd.name}</h5>
    <p class="card-text px-5">{pd.description}</p>
    <p class="card-text"><small class="text-muted"></small></p>
    <p className='fs-5'>Quantity : {pd.quantity}</p>
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

export default MyItems;