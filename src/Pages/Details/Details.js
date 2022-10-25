import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const {title,description,image,id} = details;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-20">
            <figure><img className='h-[250px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/chekout/${id}`}>Chekout</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Details;