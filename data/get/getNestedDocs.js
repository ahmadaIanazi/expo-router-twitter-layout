import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../zetup/firebase';

export const getNestedDocs = (collectionPath, documentId, nestedCollectionPath) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get a reference to the parent document
      const documentRef = doc(db, collectionPath, documentId);

      // Get the parent document
      const documentSnapshot = await getDoc(documentRef);

      if (!documentSnapshot.exists()) {
        throw new Error(`Document ${documentId} does not exist in collection ${collectionPath}`);
      }

      // Get a reference to the nested collection
      const nestedCollectionRef = collection(documentRef, nestedCollectionPath);

      // Get the documents in the nested collection
      const nestedDocsSnapshot = await getDocs(nestedCollectionRef);

      // Create an array to store the nested documents
      const nestedDocs = [];

      // Loop through the nested documents and add them to the array
      nestedDocsSnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;

        nestedDocs.push({ ...data, id });
      });

      resolve(nestedDocs);
    } catch (error) {
      console.error('Error fetching nested documents:', error);
      reject(error);
    }
  });
};
