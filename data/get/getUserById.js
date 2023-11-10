import { db } from '../../zetup/firebase';


import { doc, getDoc } from 'firebase/firestore';

export const getUserById = (id) =>
  new Promise((resolve, reject) => {
    const docRef = doc(db, 'users', id);
    getDoc(docRef)
      .then((snapshot) => {
        resolve(snapshot.exists() ? snapshot.data() : null);
      })
      .catch(() => reject());
  });