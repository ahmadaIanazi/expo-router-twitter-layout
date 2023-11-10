import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot, collection } from 'firebase/firestore';
 
export const getCustomers = (userId, onUpdate) => {
    const collectionRef = collection(db, 'passes');
    const q = query(collectionRef, where('marchantId', '==', userId), orderBy('lastUpdated', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      let cards = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      onUpdate(cards);
    });
    return unsub;
};

export const unsubsribefromCustomers = (subscription) => {
  subscription();
};
