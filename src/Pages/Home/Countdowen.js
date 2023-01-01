import React from 'react';
import bg from '../../../src/Assets/bg.png'
const Countdowen = () => {
    return (
        <section className='py-20'
        style={{
            background:`url(${bg})`,
            backgroundSize: 'cover'
        }}
        >
            <div className='grid lg:grid-cols-4'>
                <div className='mx-auto text-center'>
                    <h1 className='text-6xl font-bold text-white'>320</h1>
                    <p className='text-white text-xl font-bold'>Total Courses</p>
                </div>  
                <div className='mx-auto text-center'>
                    <h1 className='text-6xl font-bold text-white'>735</h1>
                    <p className='text-white text-xl font-bold'>Total Students</p>
                </div>  
                <div className='mx-auto text-center'>
                    <h1 className='text-6xl font-bold text-white'>50</h1>
                    <p className='text-white text-xl font-bold'>Total Teacher</p>
                </div>  
                <div className='mx-auto text-center'>
                    <h1 className='text-6xl font-bold text-white'>160</h1>
                    <p className='text-white text-xl font-bold'>Total Awarded</p>
                </div>  
            </div>
        </section>
    );
};

export default Countdowen;