// Firebase Config
import { app } from '../firebase/config';

// Firebase functions
import {
  getAuth,
  updatePassword,
  updateProfile,
  updateEmail,
} from 'firebase/auth';

// React Hooks
import { useState } from 'react';

// passar a função de criar collection dentro da função de upload image

export const useUpdateProfile = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const auth = getAuth(app);
  const user = auth.currentUser;

  const updateImage = async (imageRef) => {
    try {
      await updateProfile(user, { photoURL: imageRef });
      setSuccess('Profile image updated');
    } catch (e) {
      setError(e.message);
    }
  };

  const updateUsername = async (username) => {
    try {
      await updateProfile(user, { displayName: username });
    } catch (e) {
      setError(e.message);
    }
  };

  const updateUserEmail = async (email) => {
    try {
      await updateEmail(user, email);
    } catch (e) {
      setError(e.message);
    }
  };

  const updateUserPassword = async (password) => {
    try {
      await updatePassword(user, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    updateImage,
    updateUsername,
    updateUserEmail,
    updateUserPassword,
    error,
    success,
  };
};
