import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chekout = () => {
    const chekout = useLoaderData();
    const {title,description,category,image,price,id} = chekout;
    return (
        <div className="card w-96 bg-primary text-primary-content mx-auto mt-40">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Course Price: {price}</p>
                <div className="card-actions justify-end">
                <button className="btn inline-flex items-center bg-dark-300 border-0 py-1 px-3 focus:outline-none hover:bg-dark-200 rounded text-base mt-4 md:mt-0 mr-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Chekout;