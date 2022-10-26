import { Link } from "react-router-dom";


const CourseName = ({titles}) => {
    
    return (
        <div className=' text-white mt-3'>
            
            <Link to={`/details/${titles.id}`} className="mt-2 hover:text-blue-600 text-bold">{titles.title}</Link>
           
        </div>
    );
};

export default CourseName;