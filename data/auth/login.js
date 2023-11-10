import { auth } from '../../zetup/firebase';

import { signInWithEmailAndPassword } from 'firebase/auth';

export const login = (email, password) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        resolve(user);
      })
      .catch(reject);
  });
