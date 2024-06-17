import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const NewProtected = ({ children }) => { // Pass children as a prop
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
}

export default NewProtected;
