import { db, auth } from '../../zetup/firebase';

import { doc, updateDoc } from 'firebase/firestore';

import { onAuthStateChanged, updateProfile } from 'firebase/auth';

export const updateUserField = (field, value) =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        let obj = {};
        obj[field] = value;
        updateDoc(doc(db, 'users', user.uid), obj)
          .then(() => resolve())
          .catch((err) => reject(err));
        if(field == 'displayName'){
          updateProfile(user, { displayName: value });
        }
      } else {
        console.log('New User Data Did NOT go To DB');
      }
    });
  });
