import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShoppingBag ,FaDownload} from "react-icons/fa";
import Pdf from "react-to-pdf";

const Details = () => {
    const details = useLoaderData();
    const {title,description,image,category,price,id} = details;
    // PDF HANDELA BUTTON  
    const ref = React.createRef();
    return (
        <>
        <div ref={ref}>
        <h1 className='text-center font-bold text-4xl text-dark text-blue-700 mt-8'>Course Details</h1>
        <div className="divider"></div>
        
            <div className="card card-compact lg:w-[500px] border border-indigo-600 bg-base-100 shadow-xl lg:ml-20 mt-10">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-3xl text-bold py-4 ml-4">{title}</h2>
                    
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><FaDownload className='text-2xl text-bold cursor-pointer mr-8 text-red-500'></FaDownload></button>}
                    </Pdf>
                </div>
                
                </div>
                <figure><img className='h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-2xl text-bold'>Category: {category}</p>
                    <p className='text-2xl text-bold'>Price:${price}</p>
                    <p className='my-4'>{description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/chekout/${id}`}>
                        Premium Course</Link>
                        <FaShoppingBag className='ml-2'></FaShoppingBag>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    );
};

export default Details;