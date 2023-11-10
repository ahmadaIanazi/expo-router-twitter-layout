import * as WebBrowser from 'expo-web-browser';

export function openBrowser(url) {
  return WebBrowser.openBrowserAsync(url);
}