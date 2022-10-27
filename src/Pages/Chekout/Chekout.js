import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Chekout = () => {
    const chekout = useLoaderData();
    const {user} = useContext(AuthContext)
    const {title,description,category,image,price,id} = chekout;
    const handelaConfirm =()=>{
        toast.success('Thanks, your confirmtion is success!')
    }
    return (
        <>
        <h1 className='text-center font-bold text-4xl text-dark text-blue-700 mt-8'>Checkout</h1>
         <div className="divider"></div>
                {/* ============================================================================ */}
        <div className='flex justify-between mt-12 mx-20'>
            
            <div className=' w-2/5 flex justify-center'>
                <div className='card w-96 bg-base-100 shadow-xl px-4 py-10 border-2 border-indigo-600 '>
                <div className='rounded-full w-32 h-32 mx-auto mb-5 ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img
                    src={user?.photoURL ? user.photoURL : 'no image'}
                    referrerPolicy='no-referrer'
                    alt=''
                    className=' border w-32 h-32 rounded-full mb-4 mx-auto bg-gray-500 border-gray-700'
                    />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>
                    {user?.displayName ? user.displayName : 'Name Not Available'}</h2>
                </div>
                {/* details user */}
                <div className='space-y-1'>
                    <h1 className='flex items-center space-x-2 text-bold text-2xl text-center'>Email:
                        <span className='text-gray-700 ml-2'> {user?.email}</span>
                    </h1>

                    <h1 className='flex items-center text-center space-x-2 w-full'>
                        <h3 className='text-gray-400 flex text-small'>
                            {' '}
                            Email Status: {
                            user?.emailVerified?
                            <p className='text-green-400'>Verifyed</p>
                            :<p className='text-red-400'>Undefined</p>

                            }
                            
                        </h3>
                    </h1>
                    <span className='flex items-center space-x-2 w-full'>
                    <span className='text-gray-400 text-small w-full'>
                        {' '}
                        ID: {user?.uid}
                    </span>
                    </span>
                </div>
                </div>
            </div>
            {/* ================================================================================ */}
            <div className='border rounded-md py-8 ml-8 w-3/5 rboder-2 border-indigo-600 '>
            <h1 className='text-3xl text-bold text-center mb-3 text-orange-600'>Your Course ID : <span className='text-blue-600'>{id}</span></h1>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl text-samibold">{title}</h2>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
                </div>
                <div className='w-96 mx-auto'>
                    <button onClick={handelaConfirm} className="btn btn-outline btn-primary mt-4">Confirm Course</button>
                </div>
            </div>
            
        </div>
       </>
    );
};

export default Chekout;