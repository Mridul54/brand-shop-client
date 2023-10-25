import { createContext, useEffect, useState } from "react";

import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth"

import auth from "../firebase/firebase.config"

export const AuthContext = createContext({});

const googleProvider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    //observe of state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false)
            
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, 
        signInUser,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;