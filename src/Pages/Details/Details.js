import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const {title,description,image,category,price,id} = details;
    return (
        <>
        <h1 className='text-center font-bold text-4xl text-dark text-blue-700 mt-8'>Course Details</h1>
        <div className="divider">OR</div>

        <div className="card card-compact w-[500px] border border-indigo-600 bg-base-100 shadow-xl mx-auto mt-10">
        <h2 className="card-title text-3xl text-bold py-4 ml-4">{title}</h2>
            <figure><img className='h-[250px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='text-2xl text-bold'>Category: {category}</p>
                <p className='text-2xl text-bold'>Price:${price}</p>
                <p className='my-4'>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/chekout/${id}`}>
                    Premium Course</Link>
                    <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 ml-1'
                        viewBox='0 0 24 24'
                        >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                </button>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Details;