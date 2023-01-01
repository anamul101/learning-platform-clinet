import React from 'react';

const Contract = () => {
    return (
        <div className="hero my-20 w-full">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:mr-20 lg:text-left">
                <h1 className='text-3xl font-bold'>Get Awesome 80s of online Courses For Free!</h1>
                <p>Software is a set of instructions, data or programs used to operate computers and execute specific tasks. <br /> <br />

                We’re living in strange and unpredictable times. Just when we thought things were getting better, another development happens, and it can feel like we’re taking one step forward and three steps back. But hey, enough of that negative talk. Let’s look at the positives as we head into the new year!</p>
            </div>
            <div className="card flex-shrink-0 w-full  shadow-xl bg-base-100 border ">
                <form  action='https://formspree.io/f/xgebwdrl' method='POST' className="card-body">
                    <div className='lg:flex justify-between'>
                    <div className="form-control w-full lg:mr-4">
                        <input type="text" placeholder="FullName:" name="Full Name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <input type="email" placeholder="Email:" name="Email" className="input input-bordered" required/>
                    </div>
                    </div>
                    <div className='lg:flex justify-between'>
                    <div className="form-control w-full lg:mr-4">
                        <input type="text" placeholder="Subject:" name="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Number:" name="Number" className="input input-bordered" />
                    </div>
                    </div>
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered" name="Message" placeholder="Message..."></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="CONTACT ME" />
                    </div>
                </form>
            </div>
            
        </div>
    </div>
    );
};

export default Contract;