import { db } from '../../zetup/firebase';

import { updateDoc, doc } from 'firebase/firestore';

export const updateUserLastLogin = (userID, timestamp) =>
  new Promise((resolve, reject) => {
    console.log('Update User Last Login', userID, timestamp)
    updateDoc(doc(db, 'users', userID), { lastLogin: timestamp }).then(resolve).catch(reject);
  });
