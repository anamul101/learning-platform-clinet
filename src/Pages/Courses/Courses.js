import React from 'react';
import {  Outlet, useLoaderData } from 'react-router-dom';
import CouresDetails from '../../Sheards/CourseDetails/CouresDetails';
import CourseName from '../../Sheards/CourseName/CourseName';

const Courses = () => {
   const allCourse =useLoaderData();
    return (
        <div className='flex mt-8'>
            <div className='w-1/5'>
                {
                    allCourse.map(titles =><CourseName
                        key={titles.id}
                        titles={titles}
                    ></CourseName>)
                }
            </div>
            <div className='w-4/5 grid grid-cols-3 gap-4'>
                {
                    allCourse.map(course=><CouresDetails
                        key={course.id}
                        course={course}
                    ></CouresDetails>)
                }
            </div>
        </div>
    );
};

export default Courses;