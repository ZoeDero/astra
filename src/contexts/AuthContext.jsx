import {createContext, useState} from 'react';

const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({role:0}); // Role ?
    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
            
        
    );
};

export {AuthContext, AuthProvider};