import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getTransactions = (userId, onUpdate) => {
    const collectionRef = collectionGroup(db, 'transactions');
    const q = query(collectionRef, where('merchantId', '==', userId), orderBy('date', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      let cards = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      onUpdate(cards);
    });
    return unsub
  };

export const unsubsribefromTransactions = (subscription) => {
  subscription();
};

