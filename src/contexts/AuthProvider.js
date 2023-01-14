import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //State for onAuthStateChange
    const [user, setUser] = useState(null);
    //state for loading
    const [ loading, setLoading ] = useState(true);
    //Function for create an user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Function for sign-in an user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Function for updateUser
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }
    //Function for signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // Set the Observer
    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    }, [])
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;