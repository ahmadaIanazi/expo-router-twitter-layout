import { db, auth } from '../../lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const signup = (email, password) =>
  new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('FIREBASE: SIGN UP USER ');

        // Wrap the onAuthStateChanged logic in a separate promise
        const authStateChangedPromise = new Promise((authResolve, authReject) => {
          onAuthStateChanged(auth, (user) => {
            if (user !== null) {
              console.log('user !== null');
              const displayName = user.displayName || '';
              const photoURL = user.photoURL || '';
              const emailVerified = user.emailVerified || false;
              const uid = user.uid || '';
              const isAnonymous = user.isAnonymous || false;
              const phoneNumber = user.phoneNumber || '';

              console.log('displayName', displayName);
              console.log('email', email);
              console.log('password', password);
              console.log('photoURL', photoURL);
              console.log('emailVerified', emailVerified);
              console.log('uid', uid);
              console.log('isAnonymous', isAnonymous);
              console.log('phoneNumber', phoneNumber);

              setDoc(doc(db, 'users', uid), {
                displayName,
                email,
                uid,
                joinedData: serverTimestamp(),
                photoURL,
                emailVerified,
                isAnonymous,
                phoneNumber,
                role: 'merchant',
              })
                .then(() => {
                  authResolve(); // Resolve the inner promise
                })
                .catch((err) => {
                  console.log('ERROR setDoc user', err);
                  authReject(err);
                });
            } else {
              console.log('New User Data Did NOT go To DB');
              authResolve(); // Resolve the inner promise even if user is null
            }
          });
        });

        // Once the inner promise is resolved, resolve the outer promise
        authStateChangedPromise
          .then(() => {
            resolve();
          })
          .catch((err) => {
            console.log('ERROR OR NO ERROR this is the question, ', err);
            reject(err);
          });
      })
      .catch(reject);
  });

// import { db, auth } from '../../zetup/firebase';

// import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// export const signup = (email, password) =>
//   new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         console.log('FIREBASE: SIGN UP USER ');
//         const randomColor = generateColor();

//         onAuthStateChanged(auth, (user) => {
//           if (user !== null) {
//             console.log('user !== null');
//             const color = randomColor;
//             const displayName = user.displayName;
//             const email = user.email;
//             const photoURL = user.photoURL;
//             const emailVerified = user.emailVerified;
//             const uid = user.uid;
//             const isAnonymous = false;
//             const phoneNumber = user.phoneNumber;

//             console.log('COLOR', color);
//             console.log('displayName', displayName);
//             console.log('email', email);
//             console.log('photoURL', photoURL);
//             console.log('emailVerified', emailVerified);
//             console.log('uid', uid);
//             console.log('isAnonymous', isAnonymous);
//             console.log('phoneNumber', phoneNumber);

//             setDoc(doc(db, 'users', uid), {
//               displayName: displayName,
//               color: color,
//               email: email,
//               uid: uid,
//               joinedData: serverTimestamp(),
//               photoURL: photoURL,
//               emailVerified: emailVerified,
//               isAnonymous: isAnonymous,
//               phoneNumber: phoneNumber,
//               role: 'merchant',
//             }).catch((err)=>{
//               console.log('ERROR setDoc user', err)
//             })
//           } else {
//             console.log('New User Data Did NOT go To DB');
//           }
//         })
//           .then(() => {
//             resolve();
//           })
//           .catch((err) => {
//             console.log('ERROR OR NO ERROR this is the question, ', err);
//             reject(err);
//           });
//       })
//       .catch(reject);
//   });
