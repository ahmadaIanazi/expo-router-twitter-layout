import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../zetup/firebase';

export const updatePassPassJson = (docId, passJson, level, value) =>
  new Promise((resolve, reject) => {
    const ref = doc(db, 'passes', docId );

    return updateDoc(ref, {
      passJson: passJson,
      lastUpdated: serverTimestamp(),
      level: level,
      value: value,
    })
      .then(resolve)
      .catch((error) => {
        reject(error);
        throw new Error(`Failed to add customer: ${error}`);
      });
  });
