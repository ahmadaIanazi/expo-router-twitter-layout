import { db } from '../../zetup/firebase';

import { getDoc, doc } from 'firebase/firestore';

export const getPersonById = (personId) =>
  new Promise((resolve, reject) => {
    const collectionRef = doc(db, 'users', personId);
    getDoc(collectionRef).then((doc) => {
      if (doc) {
        resolve(doc.data());
      } else {
        reject((err) => console.log('NO USER DOC', err));
      }
    });
  });
