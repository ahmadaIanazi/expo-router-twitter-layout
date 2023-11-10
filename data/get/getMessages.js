import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getMessages = (cardId) =>
  new Promise((resolve, reject) => {
    const collectionRef = collectionGroup(db, 'messages');
    const q = query(collectionRef, where('cardId', '==', cardId), orderBy('date', 'desc'));
    onSnapshot(q, (snapshot) => {

      let cards = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      resolve(cards);
    });
  });

export const unsubsribefromMessages = (subscription) => {
  subscription();
};
