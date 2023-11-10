import { auth, db } from '../../zetup/firebase';

import { doc, updateDoc } from 'firebase/firestore';

import { EmailAuthProvider, linkWithCredential, onAuthStateChanged } from 'firebase/auth';

export const loginAnonymous = (email, password) =>
  new Promise((resolve, reject) => {
    const credentials = EmailAuthProvider.credential(email, password);

    console.log('EMAIL, PASSWORD', email, password, auth.currentUser);
    linkWithCredential(auth.currentUser, credentials)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user !== null) {
            const uid = user.uid;
            const email = user.email;
            const isAnonymous = false;
            updateDoc(doc(db, 'users', uid), {
              email: email,
              isAnonymous: isAnonymous,
            })
              .then(resolve)
              .catch(reject);
          } else {
            console.log('New User Data Did NOT go To DB');
          }
        })
          .then(resolve)
          .catch(reject);
      })
      .catch(reject);
  });
