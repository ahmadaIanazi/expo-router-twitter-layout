import * as WebBrowser from 'expo-web-browser';

export function openBrowser(url: string) {
  return WebBrowser.openBrowserAsync(url, {
    presentationStyle: WebBrowser.WebBrowserPresentationStyle.POPOVER,
  });
}