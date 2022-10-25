import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-base-300'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          
          <span className='ml-3 text-xl'>Programming Course</span>
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
          <button  className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2'>
            Logout
            
          </button>

          <Link to='/lognin' className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2'>
            Login
          </Link>
          <Link to='/register' className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
            Register
          </Link>
        </nav>
      </div>
    );
};

export default Header;