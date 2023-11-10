import { db, auth } from '../../zetup/firebase';

import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import {
  onAuthStateChanged,
} from 'firebase/auth';

import { signInWithCredential } from 'firebase/auth/react-native';

export const loginPhone = (authCredential) =>
  new Promise((resolve, reject) => {
    signInWithCredential(auth, authCredential)
    .then(() => {
      console.log('Signed in with Credential')
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          console.log('User Not NULL')
          if (user.displayName == undefined || user.displayName == null) {
            console.log('New User First Time!')

            const uid = user.uid;

            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const isAnonymous = false;
            const phoneNumber = user.phoneNumber;
            setDoc(doc(db, 'users', uid), {
              phoneNumber: phoneNumber,
              displayName: displayName,

              email: email,
              uid: uid,
              joinedData: serverTimestamp(),
              photoURL: photoURL,
              emailVerified: emailVerified,
              isAnonymous: isAnonymous,
              phoneNumber: phoneNumber,
              dropsCount: 0,
              picksCount: 0,
              role: 'merchant',
            });
          } else {
            console.log('User is Logging back in')
            resolve()
          }
        } else {
          console.log('User not onAuthChange is null');
        }
        })
          .then(resolve)
          .catch(reject);
      })
      .then(resolve)
      .catch(reject);
  });
