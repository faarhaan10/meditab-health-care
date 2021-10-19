import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleGitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    
    const handleEmailPassSignIN = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleEmailPassSignUp = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    // observe user state change 
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('')
            } else {
              
            }
          });
        return () => unsubscribed;
    },[auth])
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          });
    }


    return {
        user,
        error,
        setError,
        handleGoogleSignIn,
        handleGitHubSignIn,
        handleEmailPassSignIN,
        handleEmailPassSignUp,
        handleSignOut
    };
};

export default useFirebase;