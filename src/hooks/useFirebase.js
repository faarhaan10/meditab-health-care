import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const handleGitHubSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    
    const handleEmailPassSignIN = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleEmailPassSignUp = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    // observe user state change 
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('')
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
        return () => unsubscribed;
    },[auth])
    
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false))
    }


    return {
        user,
        error,
        setError,
        handleGoogleSignIn,
        handleGitHubSignIn,
        handleEmailPassSignIN,
        handleEmailPassSignUp,
        handleSignOut,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;