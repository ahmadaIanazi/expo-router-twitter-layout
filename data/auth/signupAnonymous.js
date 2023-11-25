import { auth } from '../../zetup/firebase';


import { signInAnonymously } from 'firebase/auth';

export const signupAnonymous = () =>
  new Promise((resolve, reject) => {
      console.log('Register Anonymous');
      signInAnonymously(auth)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
  });