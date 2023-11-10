import * as Clipboard from 'expo-clipboard';

export const copyToClipboard = async (text) => {
  try {
    await Clipboard.setStringAsync(text);
    return Promise.resolve('Copied to clipboard successfully');
  } catch (error) {
    return Promise.reject('Failed to copy to clipboard');
  }
};
