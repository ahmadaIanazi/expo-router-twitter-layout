import { db } from '../../zetup/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const updateDocFields = (collection, docId, fieldsToUpdate) =>
  new Promise((resolve, reject) => {
    updateDoc(doc(db, collection, docId), fieldsToUpdate)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
