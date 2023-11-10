import { auth } from '../../zetup/firebase';
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';

export const changePassword = (email, oldPassword, newPassword) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, oldPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updatePassword(user, newPassword)
          .then(() => {
            resolve('Password changed successfully.');
          })
          .catch((err) => reject('Error:', err));
      })
      .catch(reject);
  });
