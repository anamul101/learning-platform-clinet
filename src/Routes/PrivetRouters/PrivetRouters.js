import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const PrivetRouters = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return  <div>Loading...</div>
    }
    if(!user){
        return <Navigate to='/lognin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRouters;