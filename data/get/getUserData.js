import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export const getCurrentUserData = (user) => new Promise ((resolve, reject) => {
  const collectionRef = doc(db, 'users', user);
  getDoc(collectionRef).then((doc) => {
    if (doc) {
      resolve(doc.data())
    } else {
      reject((err) => console.log('NO USER DOC', err))
    }
  })
  .catch((err) => {
    console.log('===== AUTH LISTENER > GET USER DOCS > ERROR', err)
    reject(err)
  })
});
