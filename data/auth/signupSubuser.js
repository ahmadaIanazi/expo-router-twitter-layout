import axios from 'axios';
import { API_URL } from '../../K/urls';

export const signupSubuser = (email, password, merchantId, role) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + 'admin/registerSubuser', {
        email,
        password,
        merchantId,
        role,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(); // Resolve the promise when sub-user is created successfully
        } else {
          reject(new Error('Failed to create sub-user')); // Reject the promise if sub-user creation fails
        }
      })
      .catch((err) => {
        console.log('ERROR:', err);
        reject(err); // Reject the promise if an error occurs during the request
      });
  });
};
