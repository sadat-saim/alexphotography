import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(user);
      } else {
        setUser(null);
      }

      return () => unsubscribe();
    });
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const updateprofile = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };

  const values = { user, signup, signout, signin, googleSignIn, updateprofile };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
