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
        signInWithPopup(auth, googleProvider)
        .then(res => {
            setUser(res.user)
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(res => {
            
        })
        .catch(error => {
            setError(error.message);
        })
    }
    // console.log('firebase',email,password)
    const handleEmailPassSignIN = (email,password) => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmailPassSignUp = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            
        })
        .catch(error => {
            setError(error.message);
        })
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