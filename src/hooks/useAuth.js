// Firebase Config
import { app } from '../firebase/config';

// Firebase functions
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

// React Hooks
import { useState } from 'react';

export const useAuth = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Get auth from firebase
  const auth = getAuth(app);
  // Change firebase messages language to brazilian portuguese
  auth.languageCode = 'pt-BR';

  // Set redirect URL to localhost
  const actionCodeSettings = {
    url: 'https://moviereviews-yago.vercel.app/',
  };

  // Function to register and login new users
  const registerUser = async (email, password, username) => {
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(user, { displayName: username });

      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  // Function to login users
  const signInUser = async (email, password) => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  // Function to logout users
  const signOutUser = () => {
    signOut(auth);
  };

  // Function to send reset password email for users
  const resetPassword = async (email) => {
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setMessage(
        'E-mail de recuperação enviado com sucesso, por favor verifique sua caixa de entrada ou spam.',
      );
      setLoading(false);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      setLoading(false);
    }
  };

  return {
    auth,
    registerUser,
    signInUser,
    signOutUser,
    resetPassword,
    message,
    error,
    loading,
    onAuthStateChanged,
  };
};
