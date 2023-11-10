import { doc, serverTimestamp, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../zetup/firebase';

export const updateCardPassJson = (cardId, passJson) =>
  new Promise((resolve, reject) => {
    const ref = doc(db, 'cards', cardId);

    return updateDoc(ref, {
      passJson: passJson,
      lastUpdated: serverTimestamp(),
    })
      .then(() => {
        return getDoc(ref); // Retrieve the updated document data
      })
      .then((docSnapshot) => {
        resolve(docSnapshot.data()); // Resolve the document data
      })
      .catch((error) => {
        reject(error);
        throw new Error(`Failed to update card: ${error}`);
      });
  });
