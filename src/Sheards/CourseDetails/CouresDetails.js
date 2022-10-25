import React from 'react';
import { Link } from 'react-router-dom';

const CouresDetails = ({course}) => {
    const {title,description,category,image,price,id} = course;
    return (
          <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img className='h-[60px]' src={image} alt="cours" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{id}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/details/${id}`}>Course Details</Link></button>
                    </div>
                </div>
            </div>
    );
};

export default CouresDetails;