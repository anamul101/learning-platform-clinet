import React, { useState } from 'react';
import { useEffect } from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedCourses = () => {
    const [features, setFeatures]=useState([]);
    useEffect(()=>{
        fetch('https://b610-learning-platform-server-side-seven.vercel.app/featuser')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])
    return (
        <section className='mx-auto my-20'>
            <h1 className='text-4xl font-bold text-blue-700 text-center my-12'>Featured Courses</h1>
            <div className='grid lg:grid-cols-3 gap-4 mx-auto'>
                {
                    features.map(feature=><FeaturedCard
                    key={feature.id}
                    feature={feature}
                    ></FeaturedCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedCourses;