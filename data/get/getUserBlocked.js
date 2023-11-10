import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../zetup/firebase';


export const getUserBlocked = (userId, setBlocked) =>
  new Promise((resolve, reject) => {
    const q = collection(db, 'users', userId, 'blocking');
    getDocs(q)
      .then((snapshot) => {
        const cleanBlockedIds = [];
        snapshot.docs.map((doc) => {
          cleanBlockedIds.push(doc.id);
        });
        setBlocked(cleanBlockedIds);
        resolve(cleanBlockedIds);
      })
      .catch(() => reject());
  });
