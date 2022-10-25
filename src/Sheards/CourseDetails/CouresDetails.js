import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../../Pages/Details/Details';

const CouresDetails = ({course}) => {
    const {title,description,category,image,price,id} = course;
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl image-full">
                <figure><img className='h-[80px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description? description.slice(0,50):"no data"}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/details/${id}`}>Course Details</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CouresDetails;