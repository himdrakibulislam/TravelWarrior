import firebaseInstalling from '../components/login/firebase/firebaseInit';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
firebaseInstalling();
const useFirebase = () =>{
  const [user,setUser] = useState({})
    const googleAuthProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth,googleAuthProvider)  
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    // singup 
    const signUpUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
        
    }
    // signInUser 
    const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  
    }
    const setUserName = (name) =>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
    const logOut = () =>{
      signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
    }
    return{
        user,
        signInUsingGoogle,
        setUserName,
        signUpUser,
        signInUser,
        logOut
    }
}
export default useFirebase