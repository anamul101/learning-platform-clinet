import React from 'react';

const Blog = () => {
    return (
        <>
        <h1 className='text-center font-bold text-4xl text-dark text-blue-700 mt-8'>Blog</h1>
         <div className="divider"></div>
        <div className='grid lg:grid-cols-2 gap-8  mt-12 mx-12'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://www.keycdn.com/img/support/cors-lg.webp" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is CORS?</h2>
                    <p>In order to keep a website and its users secure from the security risks involved with sharing resources across multiple domains the use of CORS is recommended, but what is CORS? CORS, also known as Cross-Origin Resource Sharing, allows resources such as JavaScript and web fonts to be loaded from domains other than the origin parent domain.</p>
    
                    <p>These days, a web page commonly loads images, style sheets, scripts, etc. from other domains. Although, a few years ago due to security reasons, web fonts and AJAX (XML Http Requests) were normally restricted to the same-origin policy which restricted their use between domains. Now however, with the use of CORS, the browser and server can communicate to determine whether it is safe to allow a cross-origin request.</p>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://firebase.google.com/static/docs/auth/images/auth-providers.png" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Why are you using firebase?</h2>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                    <h1 className='card-title'> What other options do you have to implement authentication?</h1>

                    <p>What other options do you have to implement authentication except Firebase?
                    Back4app has many other features such as authentication, notifications, cloud functions, and storage, among many others. It support web apps and mobile applications. <br />
                        1.Back4App <br />
                        2.Scalable realtime database (SQL or NoSQL) <br />
                        3.GraphQL and Rest APIs <br />
                        4.Cloud Code Functions <br />
                        5.Authentication <br />
                        6.Notifications <br />
                        6.File Storage <br />
                        7.Social Login
                    </p>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--mNYFJ1kk--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2kflp5t0kl302gfq567.jpg" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> How does the private route work?</h2>

                    <p>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>

                    <p> 1. Home: a public route that everyone can access to.</p>
                    <p> 2. Dashboard: a private route that only authenticated user can access to.</p>
                    <p>3. Sign-in: a restricted route that unauthenticated user can see. To explain more, we don’t want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page.</p>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://www.seekpng.com/png/detail/80-803529_vector-javascript-node-js-jpg-black-and-white.png" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is Node?</h2>
                    <p>Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                    
                    <h1 className='card-title'> How does Node work?</h1>
                    <p>1.Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. <br /> 2. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. <br />3. Node JS Web Server internally has a Component, known as “Event Loop”.Aug 3, 2022</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;