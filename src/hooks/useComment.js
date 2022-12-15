import { database } from '../firebase/config';
import {
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { useState } from 'react';

export const useComment = (docCollection) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const insertComment = async (docData) => {
    setLoading(true);
    try {
      const ref = collection(database, docCollection);
      const data = { ...docData, createdAt: Timestamp.now() };
      await addDoc(ref, data);

      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const deleteComment = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(database, docCollection, id));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { insertComment, deleteComment, error, loading };
};
