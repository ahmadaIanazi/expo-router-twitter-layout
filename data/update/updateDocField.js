import { db } from '../../zetup/firebase';

import { doc, updateDoc } from 'firebase/firestore';


export const updateDocField = (collection, docId, field, value) =>
  new Promise((resolve, reject) => {
    let obj = {};
    obj[field] = value;
    updateDoc(doc(db, collection, docId), obj)
      .then(() => resolve())
      .catch((err) => reject(err));

  });
