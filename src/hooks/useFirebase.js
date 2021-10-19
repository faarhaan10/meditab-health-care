import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider , onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
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

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
          
        }
      });



    return {
        user,
        handleGoogleSignIn,
        handleGitHubSignIn,
        error
    };
};

export default useFirebase;