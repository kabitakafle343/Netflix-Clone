import { useContext ,createContext, useState, useEffect} from "react";
import {signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {auth,db} from "../services/fireBase"

import {doc,setDoc} from "firebase/firestore"
const AuthContext=createContext();
export function AuthContextProvider({children}){
    const [user,setuser]=useState({});
    useEffect(()=>{
        const unSubscribed=onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
        })
        return ()=>{
            unSubscribed();
        }
    },[])
    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
        setDoc(doc(db,"users",email),{
            favShows:[]
        })
    }

    function logIn(email,password){
      return signInWithEmailAndPassword(auth,email,password);  
    }
    function logOut(){
        return signOut(auth)
    }
    return <AuthContext.Provider value={{user,signUp,logOut,logIn}}>{children}</AuthContext.Provider>
    }
export function UserAuth(){
    return useContext(AuthContext);
}