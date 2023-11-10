import { doc, updateDoc } from 'firebase/firestore';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '../../zetup/firebase';

export const uploadLogo = async (image, cardId) => {
  const path = `${cardId}/logo.png`;
  const docRef = doc(db, 'cards', cardId);

  const blob = await new Promise((resolve, reject) => {
    const fetchXHR = new XMLHttpRequest();
    fetchXHR.onload = function () {
      resolve(fetchXHR.response);
    };
    fetchXHR.onerror = function (e) {
      reject(new TypeError('Network request failed'));
    };
    fetchXHR.responseType = 'blob';
    fetchXHR.open('GET', image, true);
    fetchXHR.send(null);
  }).catch((err) => console.log(err));

  const imageRef = ref(storage, path);

  await uploadBytes(imageRef, blob)
    .then(async () => {
      await getDownloadURL(imageRef).then((mediaURL) => {
        updateDoc(
          docRef,
          { logo: mediaURL, logo_2: mediaURL, hero: mediaURL, hero_image: mediaURL },
          { merge: true }
        );
        // updateDoc(docRef, {  }, { merge: true });
      });
      blob.close();
    })
    .catch((err) => console.log(err));
};
