import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../firebase/config';

export const useFetchData = (docCollection, genre = null) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const collectionRef = collection(database, docCollection);
      try {
        let q;

        if (genre) {
          q = query(
            collectionRef,
            where('genre', '==', genre),
            orderBy('createdAt', 'desc'),
          );
        } else {
          q = query(collectionRef, orderBy('createdAt', 'desc'));
        }
        onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
        });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [docCollection, genre]);

  return { documents };
};
