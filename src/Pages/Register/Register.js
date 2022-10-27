import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [error, setError] = useState('');
  const {createUser,authUpdate,verifiEmail,authSignInGoogle, authSignInGithub,setUser} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from= location.state?.from?.pathname ||'/'

  // Submit Handela

  const HandelaSubmit =(event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email =form.email.value;
    const password = form.password.value;

   // Validation password
   if(password.length < 8){
      setError('Should be given at least password 8 carectar or more')
   }

     //  Create User Id;
    createUser(email,password)
      .then(result=>{
        const user = result.user;
        userProfileUbdate(name,photoURL)
        form.reset();
        verifyUserEmail();
        Swal.fire(
          'Register successfull',
          'Chack Your spam folder for email verify!',
          'success'
        )
        navigate(from,{replace: true}); 
        setError('');
      })
      .catch(error=>{
        setError(error.message);
      })
  }
  // upDATE Profile
  const userProfileUbdate =(name,photoURL)=>{
    const userProfileDetails = {
        displayName: name,
        photoURL: photoURL,
    }
    authUpdate(userProfileDetails)
        .then(()=>{})
        .catch(error=>console.error(error));
}
const verifyUserEmail=()=>{
    verifiEmail()
        .then(()=>{})
        .catch(error=>console.error(error))
}
  // Handel Google
  const handelGoogleSignIn = ()=>{
    authSignInGoogle(googleProvider)
      .then((result)=>{
        const user = result.user;
        navigate(from,{replace: true});  
      })
      .catch(error=>console.error(error))
  }
  // Handela GitHub 
  const handelaGithubSignIn = () =>{
      authSignInGithub(githubProvider)
        .then(result=>{
          const user = result.user;
          setUser(user);
          navigate(from,{replace: true}); 
        })
        .catch(error=>console.error(error))
  }
    return (
        <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className=' text-4xl text-blue-700 font-bold'>Register</h1> 
        </div>
        <form
          onSubmit={HandelaSubmit}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                First Name
              </label>
              <input
                type='text'
                name='name'
                placeholder='First Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300'
                data-temp-mail-org='0'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Photo URL
              </label>
              <input
                type='text'
                name='photoURL'
                placeholder='Enter Your PhotoUrl'
                className='w-full px-3 py-2 border rounded-md border-gray-300'
                data-temp-mail-org='0'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 '
                data-temp-mail-org='0'
                required
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='w-full px-3 py-2 border rounded-md border-gray-300'
                required
              />
            </div>
          </div>
          <div>
              <p className='text-center text-sm text-red-800'>{error}</p>
          </div>
          <div className='space-y-2'>
            <div>
              <button
                type='submit'
                className='w-full px-8 py-3 font-semibold rounded-md bg-gr btn btn-primary'
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-1xl dark:text-gray-400'>
            Register with your social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button onClick={handelGoogleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
            <FcGoogle className='text-2xl'></FcGoogle>
          </button>
          <button onClick={handelaGithubSignIn} aria-label='Log in with GitHub' className='p-3 rounded-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
            </svg>
          </button>
        </div>
        <p className='px-6 text-1xl text-center'>
          Already have an account? please
          <Link to='/lognin' className='hover:text-blue-700 ml-2 hover:underline'>
            LogIn
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default Register;