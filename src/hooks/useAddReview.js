import { useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { database, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const useAddReview = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const addReview = async (data, img) => {
    setLoading(true);

    try {
      const generateName = `posters/${Date.now()}`;
      const storageRef = ref(storage, generateName);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(uploadProgress);
        },
        (error) => {
          alert(error.message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = collection(database, 'reviews');

          const docData = {
            image: url,
            ...data,
          };

          await addDoc(docRef, docData);
          setProgress(0);
          setLoading(false);
          setSuccess('Review added successfully');
        },
      );
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return { addReview, success, error, loading };
};
