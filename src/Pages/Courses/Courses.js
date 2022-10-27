import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouresDetails from '../../Sheards/CourseDetails/CouresDetails';
import CourseName from '../../Sheards/CourseName/CourseName';

const Courses = () => {
   const allCourse =useLoaderData();
    return (
        <>
            <h1 className="text-center font-bold text-4xl text-dark mt-8"> <span className='text-blue-700'>Total Course: </span>{allCourse.length}</h1>
             <div className="divider"></div>
            <div className='flex mt-12'>
            
                <div className='w-1/5 p-8 mr-12 bg-stone-700'>
                    <h1 className="text-center font-bold text-2xl underline text-white"> Course Name</h1>
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