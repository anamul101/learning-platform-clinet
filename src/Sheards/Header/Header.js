import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import image from '../../../src/Assets/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,LogOut} = useContext(AuthContext);

  const handelLogOut = ()=>{
      LogOut()
      .then(()=>{})
      .catch(error=>console.error(error))
  }

    return (
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-base-200 shadow-lg'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <img className='w-15 h-10 rounded-md' src={image} alt="" />
          <span className='ml-3 text-4xl text-bold'><span className='text-blue-800'>ES6</span> Tutorial</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className= 'mr-5 hover:text-gray-900'>
            HOME
          </Link>

          <Link to='/course' className='mr-5 hover:text-gray-900'>
            COURSES
          </Link>
          <Link to='/blog' className='mr-5 hover:text-gray-900'>
            BLOG
          </Link>
          <Link to='/faq' className='mr-5 hover:text-gray-900'>
            FAQ
          </Link>
          <div className='mr-3 mt-2'><ReactSwitch></ReactSwitch></div>
          <>
            {
              user?.uid?
              <> 
                
                <div className="tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>  
                    <img src={user?.photoURL} style={{height:'40px'}} className="rounded-full mr-4" alt="" /> 
                </div>
                <button onClick={handelLogOut} className='btn btn-outline btn-error mr-2'>
                  Logout
                </button>
              </>
              :
              <>
               <button className='btn btn-outline btn-primary mr-2'>
                  <Link to='/lognin'>Login</Link>
                </button>
                <button className='btn btn-outline btn-secondary'>
                  <Link to='/register'>Register</Link>
                </button>
              </>
            }
          </>
        </nav>
      </div>
    );
};

export default Header;