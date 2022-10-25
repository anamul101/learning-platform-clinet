import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/Assets/Hero.png'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Beginner Javascript Courses</h1>
                <p className="py-6">But which JavaScript resource is for you? We’ve compiled a list of the best resources to learn JavaScript for free, whether you’re just starting out or you already know how to use booleans, strings, and data structures</p>
                
                <button className="btn btn-primary inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        <Link to='/course'>
                            Explore Courses 
 
                        </Link>
                                <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-4 h-4 ml-1'
                                viewBox='0 0 24 24'
                                >
                                <path d='M5 12h14M12 5l7 7-7 7'></path>
                            </svg>
                    </button>          
                </div>
            </div>
        </div>
    );
};

export default Home;