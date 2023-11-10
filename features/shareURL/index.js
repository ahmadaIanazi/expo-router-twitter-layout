import { Share } from 'react-native';

export const shareURL = (url, message) =>
  new Promise(async (resolve, reject) => {
    const sharingMessage = `${message}\n ${url}`;

    try {
      const result = await Share.share({
        message: sharingMessage,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          resolve();
        } else {
          // shared
          resolve();
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        resolve();
      }
    } catch (error) {
      reject(error);
      alert(error.message);
    }
  });
