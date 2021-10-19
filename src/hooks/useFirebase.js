import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
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

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              
            }
          });
    },[])
    
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
        handleGoogleSignIn,
        handleGitHubSignIn,
        handleSignOut
    };
};

export default useFirebase;