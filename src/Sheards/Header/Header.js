import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/Assets/logo.png'

const Header = () => {
    return (
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-base-300'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <img className='w-15 h-10 rounded-md' src={image} alt="" />
          <span className='ml-3 text-4xl text-bold'><span className='text-blue-800'>ES6</span> Tutorial</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>
            Home
          </Link>

          <Link to='/course' className='mr-5 hover:text-gray-900'>
            Courses
          </Link>
          <Link to='/blog' className='mr-5 hover:text-gray-900'>
            Blog
          </Link>
          <Link to='/faq' className='mr-5 hover:text-gray-900'>
            Faq
          </Link>
          <button  className='btn btn-outline btn-error mr-2'>
            Logout
            
          </button>
          <button className='btn btn-outline btn-primary mr-2'>
            <Link to='/lognin'>
              Login
            </Link>
          </button>
          <button className='btn btn-outline btn-secondary'>
            <Link to='/register'>
              Register
            </Link>
          </button>
          
        </nav>
      </div>
    );
};

export default Header;