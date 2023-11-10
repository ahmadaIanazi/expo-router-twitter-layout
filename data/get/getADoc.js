import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../zetup/firebase';

export const getADoc = (collection, user) =>
  new Promise((resolve, reject) => {
    const collectionRef = doc(db, collection, user);
    getDoc(collectionRef)
      .then((doc) => {
        if (doc) {
          resolve(doc.data());
        } else {
          reject((err) => console.log('NO USER DOC', err));
        }
      })
      .catch((err) => {
        console.log('===== AUTH LISTENER > GET USER DOCS > ERROR', err);
        reject(err);
      });
  });
