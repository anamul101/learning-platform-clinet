import React from 'react';
import {  Outlet, useLoaderData } from 'react-router-dom';
import CouresDetails from '../../Sheards/CourseDetails/CouresDetails';
import CourseName from '../../Sheards/CourseName/CourseName';

const Courses = () => {
   const allCourse =useLoaderData();
    return (
        <>
             <h1 className="text-center font-bold text-4xl text-dark mt-8"> Total Courses: {allCourse.length}</h1>
        
            <div className='flex mt-12'>
            
                <div className='w-1/5 p-8 mr-12 bg-stone-700'>
                    <h1 className="text-center font-bold text-2xl text-white"> Course Name</h1>
                    {
                        allCourse.map(titles =><CourseName
                            key={titles.id}
                            titles={titles}
                        ></CourseName>)
                    }
                </div>
                <div className='w-4/5 grid grid-cols-3 gap-4 '>
                    {
                        allCourse.map(course=><CouresDetails
                            key={course.id}
                            course={course}
                        ></CouresDetails>)
                    }
                </div>
            </div>
            {/* heror */}
            
        </>
    );
};

export default Courses;