import { auth } from '../../zetup/firebase';
import { signInWithEmailAndPassword, updateEmail } from 'firebase/auth';

export const changeEmail = (email, password, newEmail) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateEmail(user, newEmail)
          .then(() => {
            resolve('Email changed successfully.');
          })
          .catch(reject);
      })
      .catch(reject);
  });
