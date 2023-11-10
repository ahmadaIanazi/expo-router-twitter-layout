import * as Sharing from 'expo-sharing';

export async function shareLocalFile(uri, options = {}) {
  const isAvailable = await Sharing.isAvailableAsync();

  if (isAvailable) {
    try {
      await Sharing.shareAsync(uri, options);
      console.log('File shared successfully');
    } catch (error) {
      console.log('Failed to share file:', error);
    }
  } else {
    console.log('Sharing is not available in this app');
  }
}
