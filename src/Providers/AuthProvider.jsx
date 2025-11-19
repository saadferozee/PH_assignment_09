import React, { useState } from 'react';
import AuthContext from '../Contexts/AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        
    }

    const AuthInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;