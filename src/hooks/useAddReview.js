import { useState } from 'react';

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { database, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const useAddReview = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
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
          console.log(uploadProgress);
        },
        (error) => {
          alert(error.message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = collection(database, 'reviews');

          const docData = {
            image: url,
            createdAt: Timestamp.now(),
            ...data,
          };

          await addDoc(docRef, docData);
          setLoading(false);
          setSuccess('Review added successfully');
        },
      );
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return { addReview, success, setSuccess, error, setError, loading };
};
