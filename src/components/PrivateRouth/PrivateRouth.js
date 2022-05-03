import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const PrivateRouth = ({children}) => {
    let location =useLocation()
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <loading></loading>
    }
    if(!user){

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRouth;