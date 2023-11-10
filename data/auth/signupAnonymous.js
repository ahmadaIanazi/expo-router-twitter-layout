import { db, auth } from '../../zetup/firebase';

import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';


export const signupAnonymous = () =>
  new Promise((resolve, reject) => {
      console.log('Register Anonymous');
      signInAnonymously(auth)
        .then(() => {
          onAuthStateChanged(auth, (user) => {
            if (user !== null) {

              const displayName = user.displayName;
              const email = user.email;
              const photoURL = user.photoURL;
              const emailVerified = user.emailVerified;
              const uid = user.uid;
              const isAnonymous = true;
              const phoneNumber = user.phoneNumber;
              setDoc(doc(db, 'users', uid), {
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
              console.log('New User Data Did NOT go To DB');
            }
          });
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
  });