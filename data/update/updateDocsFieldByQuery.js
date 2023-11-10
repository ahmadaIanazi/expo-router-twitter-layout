import { db } from '../../zetup/firebase';
import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  doc,
} from 'firebase/firestore';

export const updateDocsFieldByQuery = async (
  collectionName,
  field,
  value,
  queryField,
  relation,
  queryValue
) => {
  const collectionRef = collection(db, collectionName);
  const queryRef = query(collectionRef, where(queryField, relation, queryValue));

  try {
    const querySnapshot = await getDocs(queryRef);
    const updatePromises = [];

    querySnapshot.forEach((docSnap) => {
      const docData = docSnap.data();
      const docId = docSnap.id;

      if (docData) {
        const updatedData = {
          ...docData,
          [field]: value,
          lastUpdated: serverTimestamp(),
        };

        const docRef = doc(db, collectionName, docId);
        const updatePromise = updateDoc(docRef, updatedData)
          .then(() => {
            console.log('Doc updated', docId);
          })
          .catch((err) => {
            console.log('Doc Not Update: ', err);
          });

        updatePromises.push(updatePromise);
      } else {
        console.log(`Skipping document ${docId} - data not found`);
      }
    });

    await Promise.all(updatePromises);

    console.log(`${collectionName} updated successfully`);
  } catch (error) {
    throw new Error(`Failed to update ${collectionName}: ${error}`);
  }
};
