import React from 'react';
import error from "../../images/error.png"
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className='error-container'>
        <img className='errorImg mx-auto' src={error} alt="" />
    </div>
    );
};

export default NotFound;