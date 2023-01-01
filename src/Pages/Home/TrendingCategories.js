import React, { useState } from 'react';
import { useEffect } from 'react';
import TrendingCard from './TrendingCard';

const TrendingCategories = () => {
    const [allCourse, setAllCourse]=useState([]);
    useEffect(()=>{
        fetch('https://b610-learning-platform-server-side-seven.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setAllCourse(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-blue-700 text-center my-12'>Trending Categories</h1>
            <div className='grid lg:grid-cols-4 gap-4 mx-auto'>
                    {
                        allCourse.map(course=><TrendingCard
                            key={course.id}
                            course={course}
                        ></TrendingCard>)
                    }
            </div>
        </div>
    );
};

export default TrendingCategories;