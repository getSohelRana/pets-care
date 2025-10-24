import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
	const [loading , setLoading] = useState(true);

  // sign up user
  const createUser = (email, password) => {
		setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

	// sing out user

	const singOut = () => {
		return signOut(auth)
	}

	// login user
	const signIn = (email, password) =>{
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// sign in with google
	const logInWithGoogle = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
	}

	//authentication state observer and get user data
	useEffect(()=> {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false)
		})
		return ()=> {
			unsubscribe
		}
	},[])


  const authData = {
    user,
    setUser,
    createUser,
		singOut,
		signIn,
		loading,
		setLoading,
		logInWithGoogle
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
