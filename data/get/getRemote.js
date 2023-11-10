import { db } from '../../zetup/firebase';

import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getRemote = (userId, onUpdate) => {
  const collectionRef = collectionGroup(db, 'remote');
  const q = query(collectionRef);
  const unsub = onSnapshot(q, (snapshot) => {
    let remoteDocs = snapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });
    onUpdate(remoteDocs);
  });
  return unsub;
};