import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../Pages/Courses/Courses';
import CourseName from '../Sheards/CourseName/CourseName';
import Header from '../Sheards/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;