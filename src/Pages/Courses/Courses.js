import React from 'react';
import {  Outlet } from 'react-router-dom';
import CouresDetails from '../../Sheards/CourseDetails/CouresDetails';
import CourseName from '../../Sheards/CourseName/CourseName';

const Courses = () => {
    return (
        <div>
            <div className="flex w-full mt-12">
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                        <CourseName>
                        
                        </CourseName>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                        <CouresDetails>
                            <Outlet></Outlet>
                        </CouresDetails>
                    </div>
                </div>
        </div>
    );
};

export default Courses;