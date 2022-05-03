import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const notify = () => toast("Product Added");
    const onSubmit = data => {
        console.log("dld",data)
        const url =`http://localhost:5000/products`
        fetch(url,{
            method: "POST",
            headers: {
                'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result)
           
        })
    }
    return (
        <div className ="w-50 mx-auto my-5">
            <h2 className='my-5'>Upload Your Product</h2>
        <form className ="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className ="mb-2" placeholder ="Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder ="Description" className ="mb-2" {...register("description")} />
        <input className ="mb-2" placeholder ="Price" type="number" {...register("price")} />
        <input className ="mb-2" placeholder ="Photo Url" type="text" {...register("img")} />
        <input className ="mb-2" placeholder ="Quantity" type="text" {...register("quantity")} />
        <input className ="mb-2" placeholder ="email" type="email" {...register("email")} />
        <input className ="mb-2" placeholder ="Supplier name" type="text" {...register("supplier_name")} />
        <input onClick={notify} className ="btn btn-primary" value ="Add Product" type="submit" />
        <ToastContainer />
      </form>
        </div>
    );
};

export default AddItem;