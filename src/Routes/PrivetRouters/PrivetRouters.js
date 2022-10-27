import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const PrivetRouters = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return  <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark border-green-700 mt-20"></div>
    }
    if(!user){
        return <Navigate to='/lognin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRouters;