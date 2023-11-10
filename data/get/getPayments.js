import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getPayments = (userId) =>
  new Promise((resolve, reject) => {
    const collectionRef = collectionGroup(db, 'payments');
    const q = query(collectionRef, where('userId', '==', userId), orderBy('date', 'desc'));
    onSnapshot(q, (snapshot) => {
      let payments = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      resolve(payments);
    });
  });

export const unsubsribefromMessages = (subscription) => {
  subscription();
};
