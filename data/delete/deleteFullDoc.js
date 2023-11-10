import { db } from '../../zetup/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteFullDoc = (collection, docId) =>
  new Promise((resolve, reject) => {
    deleteDoc(doc(db, collection, docId))
      .then(() => resolve())
      .catch((err) => reject(err));
  });
