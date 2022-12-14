// Firebase Config
import { app, storage } from '../firebase/config';

// Firebase functions
import {
  getAuth,
  updatePassword,
  updateProfile,
  updateEmail,
} from 'firebase/auth';

// React Hooks
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

// passar a função de criar collection dentro da função de upload image

export const useUpdateProfile = () => {
  const [loadImg, setLoadImg] = useState(false);
  const [successImg, setSuccessImg] = useState(null);
  const [errorImg, setErrorImg] = useState(null);

  const [loadName, setLoadName] = useState(false);
  const [successName, setSuccessName] = useState(null);
  const [errorName, setErrorName] = useState(null);

  const [loadEmail, setLoadEmail] = useState(false);
  const [successEmail, setSuccessEmail] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);

  const [loadPassword, setLoadPassword] = useState(false);
  const [successPassword, setSuccessPassword] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const auth = getAuth(app);
  const user = auth.currentUser;

  const updateImage = async (image) => {
    setLoadImg(true);
    setSuccessImg(null);
    try {
      const generateName = `profileImg/${Date.now()}`;
      const storageRef = ref(storage, generateName);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(uploadProgress);
        },
        (error) => {
          alert(error.message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          await updateProfile(user, { photoURL: url });
          setSuccessImg('Profile image successfully updated');
          setLoadImg(false);
        },
      );
    } catch (e) {
      setErrorImg(e.message);
      setLoadImg(true);
    }
  };

  const updateUsername = async (username) => {
    setLoadName(true);
    setSuccessName(null);
    try {
      await updateProfile(user, { displayName: username });
      setSuccessName('Username successfully updated');
      setLoadName(false);
    } catch (e) {
      setErrorName(e.message);
      setLoadName(false);
    }
  };

  const updateUserEmail = async (email) => {
    setLoadEmail(true);
    setSuccessEmail(null);
    try {
      await updateEmail(user, email);
      setSuccessEmail('E-mail successfully updated');
      setLoadEmail(false);
    } catch (e) {
      setErrorEmail(e.message);
      setLoadEmail(false);
    }
  };

  const updateUserPassword = async (password) => {
    setLoadPassword(true);
    setSuccessPassword(null);
    try {
      await updatePassword(user, password);
      setSuccessPassword('E-mail successfully updated');
      setLoadPassword(false);
    } catch (e) {
      setErrorPassword(e.message);
      setLoadPassword(false);
    }
  };

  return {
    updateImage,
    updateUsername,
    updateUserEmail,
    updateUserPassword,
    loadImg,
    successImg,
    errorImg,
    loadName,
    successName,
    errorName,
    loadEmail,
    successEmail,
    errorEmail,
    loadPassword,
    successPassword,
    errorPassword,
    setSuccessImg,
    setErrorImg,
    setSuccessName,
    setErrorName,
    setSuccessEmail,
    setErrorEmail,
    setSuccessPassword,
    setErrorPassword,
  };
};
