import React from 'react';
import { Link } from 'react-router-dom';

const TrendingCard = ({course}) => {
    const {title,description,category,image,price,id} = course;
    return (
        <div className="card lg:w-[300px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                <Link to='/course'>
                    <button className="btn bg-gray-500 border-gray-500">View Now</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;