import React from 'react';
import about from "../../../images/about.jpg"
const About = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="">
                    <img className='img-fluid' src={about} alt="" />
                </div>
                <div className=" d-flex align-items-center">
                    <div className="text-start">
                    <h2 className='text-primary fw-bold'>We Can Take Your Business To The Next Level.</h2>
                    <p>The MicroTech sells items of essential use Laptops, and so on.The Warehouse's 
                        stores are colloquially known both within the organisation and within New Zealand as "Red Sheds".
                        our company stablised in 2010 and we are growing day by day.Get great deals every day at The MicroTech. we have massive range of products
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;