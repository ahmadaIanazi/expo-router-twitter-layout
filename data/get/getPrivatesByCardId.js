import { db } from '../../zetup/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

export const getPrivatesByCardId = async (cardId) => {
  try {
    const field = 'cardId';
    const condition = '==';
    const value = cardId;

    const ref = collection(db, 'privates');
    const q = query(ref, where(field, condition, value));
    const querySnapshot = await getDocs(q);

    const Docs = [];
    querySnapshot.forEach((doc) => {
      const Doc = doc.data();
      Doc.id = doc.id;
      Docs.push(Doc);
    });

    return Docs;
  } catch (error) {
    console.error('Error getting privates:', error);
    throw error;
  }
};

// * ===== PROMISE ======= * //
/*
export const getPrivatesByCardId = (cardId) =>
  new Promise((resolve, reject) => {
    const field = 'cardId';
    const condition = '==';
    const value = cardId;

    const ref = collection(db, 'privates');
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
*/