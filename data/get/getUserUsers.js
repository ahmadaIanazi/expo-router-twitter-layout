import { db } from '../../zetup/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

export const getUserUsers = (merchantId) =>
  new Promise((resolve, reject) => {
    /** QUERY */
    const field = 'merchantId';
    const condition = '==';
    const value = merchantId;

    /** RESOLVE DOCS WITH ID */
    const ref = collection(db, 'users');
    const q = query(ref, where(field, condition, value));
    getDocs(q)
      .then((querySnapshot) => {
        const Docs = [];
        querySnapshot.forEach((doc) => {
          const Doc = doc.data();
          Doc.id = doc.id;
          Docs.push(Doc);
        });
        resolve(Docs);
      })
      .catch((error) => {
        console.error('Error getting privates:', error);
        reject(error);
      });
  });