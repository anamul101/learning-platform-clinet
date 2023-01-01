import React from 'react';
import About from './About';
import Banner from './banner';
import Contract from './Contract';
import Countdowen from './Countdowen';
import FeaturedCourses from './FeaturedCourses';
import TrendingCategories from './TrendingCategories';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <About></About>
        <FeaturedCourses></FeaturedCourses>
        <Countdowen></Countdowen>
        <TrendingCategories></TrendingCategories>
        <Contract></Contract>
        </>
    );
};

export default Home;