import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init"
initializeAuthentication();
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside user',user);
                setUser(user)
            }
        })
    },[])
    return{
        user,
        error,
        logOut,
        signInWithGoogle
    }}
export default useFirebase;