import React from 'react';

const FeaturedCard = ({feature}) => {
    const {name,id,title,skills,price,cousre_location,Lessons,description,category,image} = feature
    return (
        <div className="card lg:w-[420px] bg-base-100 shadow-xl mx-auto">
            <figure>
                <img className='w-full' src={image} alt={title} />
            </figure>
            <div className="p-6">
                <h2 className="card-title">{name}
                <div className="badge badge-secondary">${price}</div>
                </h2>
                <p>Skills: {skills}</p>
                <p className='text-2xl'>{title}</p>
                <p>{description?description.slice(0,40):'no data'}...</p>
                <div className="flex">
                <p className='mr-3 mt-2'>{Lessons}</p>
                <p className='mt-2'>{cousre_location}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;