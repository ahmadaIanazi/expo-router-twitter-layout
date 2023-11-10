import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getCustomerTransactions = (phone, merchantId) =>
  new Promise((resolve, reject) => {
    const collectionRef = collectionGroup(db, 'transactions');
    const q = query(
      collectionRef,
      where('merchantId', '==', merchantId),
      where('phone', '==', phone),
      orderBy('date', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      let cards = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      resolve(cards);
    });
  });

