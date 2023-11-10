import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getCards = (userId, onUpdate, setLoading, setError) => {
  const collectionRef = collectionGroup(db, 'cards');
  const q = query(collectionRef, where('merchantId', '==', userId), orderBy('createdAt', 'desc'));

  const unsub = onSnapshot(
    q,
    (snapshot) => {
      // Get Data
      let cards = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setLoading(false);
      onUpdate(cards);
    },
    (error) => {
      // onError callback: This is called if there's an error during the listen operation.
      console.error('Error:', error);
      setError(true);
    },
    () => {
      // onCompletion callback: This is rarely used because the snapshot stream is never-ending.
      console.log('Listening completed.');
      setLoading(false);
    }
  );

  return unsub; // This is returned so you can unsubscribe when needed.
};