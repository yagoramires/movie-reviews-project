import { useState } from 'react';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

export const useUploadImage = () => {
  const [imageRef, setImageRef] = useState('');
  const [progress, setProgress] = useState('');

  const uploadImage = async (image) => {
    if (!image) {
      return;
    }

    const generateName = `images/${Date.now()}`;
    const storageRef = ref(storage, generateName);

    const uploadTask = uploadBytesResumable(storageRef, image);

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
        setImageRef(url);
        setProgress(0);
      },
    );
  };

  return { uploadImage, imageRef, progress };
};
