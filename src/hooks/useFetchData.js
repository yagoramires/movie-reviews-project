import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../firebase/config';

export const useFetchData = (docCollection) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const collectionRef = collection(database, docCollection);

      const q = query(collectionRef, orderBy('createdAt', 'desc'));

      onSnapshot(q, (querySnapshot) => {
        setDocuments(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        );
      });
    };
    fetchData();
  }, []);

  return { documents };
};
