import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='my-20'>
             <p className='text-4xl font-bold text-orange-600 text-center my-12'>About Us</p>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src='https://exploringjs.com/es6/images/cover.jpg' alt='person' className="h-[400px] w-4/5 rounded-lg shadow-2xl" />
                <img src='https://www.cuelogic.com/wp-content/uploads/2021/06/Advantages-of-JavaScript-ES6-over-ES51.jpg' alt='parts' className="w-3/5 right-5 h-[250px] top-1/2 border-8 border-white absolute rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                <h1 className="text-4xl font-bold my-5"> We are qualified <br /> & of experience in this field</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                <Link to='/faq'>
                <button className="btn btn-primary">Go To FAQ</button>
                </Link>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;