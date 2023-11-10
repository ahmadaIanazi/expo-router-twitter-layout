import { db } from '../../zetup/firebase';
import { query, collectionGroup, where, orderBy, onSnapshot } from 'firebase/firestore';

export const getCardsQuery = (userId, onDataUpdate, onError) => {
  try {
    const collectionRef = collectionGroup(db, 'cards');
    const q = query(collectionRef, where('merchantId', '==', userId), orderBy('createdAt', 'desc'));

    // Set up a real-time listener
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cards = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });

      // Call the callback function to update the data in your component
      onDataUpdate(cards);
    });

    return unsubscribe; // Return the unsubscribe function to clean up the listener
  } catch (error) {
    // Handle any errors here and call the error callback function if provided
    onError(error);
    throw error;
  }
};

// import { db } from '../../zetup/firebase';
// import { query, collectionGroup, where, orderBy, getDocs } from 'firebase/firestore';

// export const getCardsQuery = async (userId) => {
//   try {
//     const collectionRef = collectionGroup(db, 'cards');
//     const q = query(collectionRef, where('merchantId', '==', userId), orderBy('createdAt', 'desc'));
//     const querySnapshot = await getDocs(q);

//     const cards = querySnapshot.docs.map((doc) => {
//       const data = doc.data();
//       const id = doc.id;
//       return { id, ...data };
//     });

//     return cards;
//   } catch (error) {
//     // Handle any errors here
//     throw error;
//   }
// };
