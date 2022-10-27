import React from 'react';

const Faq = () => {
    return (
        <>
         <h1 className='text-center font-bold text-4xl text-dark text-blue-700 mt-8'>ES6 Interview Questions (FAQ)</h1>
         <div className="divider"></div>
        <div className='lg:mx-40 my-10'>
            <div tabIndex={0} className="collapse collapse-arrow mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How can I use ES6 today?
                </div>
                <div className="collapse-content"> 
                    <p>When JavaScript was developed, the name itself was chosen for marketing reasons since Java was getting popular around the time. But to standardize the language and its specification, it was submitted to ECMA international (European Computer Manufacturers Association), a body for standardization of information and communication technology. Eventually the language standardized in ECMA is called ECMAScript of ES. The first edition was released on June 1997.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What are some of the features of ES6?
                </div>
                <div className="collapse-content"> 
                    <p>Some of the new features of ES6 are: <br />

                   1. Support for constants (also known as “immutable variables”)
                   2. Block-Scope support for both variables, constants, functions
                   3. Arrow functions
                   4. Extended Parameter Handling
                   5. Template Literals and Extended Literals
                   6. Enhanced Regular Expression
                   7. Destructuring Assignment
                   8. Modules, Classes, Iterators, Generators
                   9. Enhanced Object Properties
                    10. Support for Map/Set & WeakMap/WeakSet
                    11.Prom ises, Meta-Programming ,Internationalization and Localization</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is let and const? And how it differs from var?
                </div>
                <div className="collapse-content"> 
                    <p>Previously, when we declare any variable using var, it was function scoped. Meaning the variable can be accessed within the function. This leads to wrap the code in a function whenever we need to create a new scope. <br />

                    But let and const uses block scoping. This means the variable declared using these keywords only exist within the innermost block that surrounds them.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is WeakMap in ES6?
                </div>
                <div className="collapse-content"> 
                    <p>The WeakMap is same as Map where it is a collection of key/value pairs. But in WeakMap, the keys must be objects and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The WeakMap API is the same as the Map API.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is Generator function?
                </div>
                <div className="collapse-content"> 
                    <p>Generator functions are a new feature in ES6 that allow a function to generate many values over time by returning an object which can be iterated over to pull values from the function one value at a time. <br />

                    A generator function returns an iterable object when it’s called. It is written using the new * syntax as well as the new yield keyword introduced in ES6.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Faq;