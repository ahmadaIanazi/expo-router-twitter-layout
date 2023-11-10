import {
  doc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from '../../zetup/firebase';
import { replacePassJson } from '../../operations/replace';

export const updatePassesJson = async (cardId, type, value) => {
  const passesRef = collection(db, 'passes');
  const passesQuery = query(passesRef, where('cardId', '==', cardId));

  try {
    const querySnapshot = await getDocs(passesQuery);

    const updatePromises = [];

    querySnapshot.forEach((docSnap) => {
      const passJson = docSnap.data().passJson;
      const docId = docSnap.id

      if (passJson) {

        const updatedPassJson = replacePassJson(passJson, type, value);
        
        const docRef = doc(db, 'passes', docId);
        const updatePromise = updateDoc(docRef, {
          passJson: updatedPassJson,
          lastUpdated: serverTimestamp(),
        })
          .then(() => {
            console.log('Doc updated', docId);
          })
          .catch((err) => {
            console.log('Doc Not Update: ', err);
          });

        updatePromises.push(updatePromise);
      } else {
        console.log(`Skipping document ${docId} - passJson not found`);
      }
    });

    await Promise.all(updatePromises);

    console.log('Passes updated successfully');
  } catch (error) {
    throw new Error(`Failed to update passes: ${error}`);
  }
};
