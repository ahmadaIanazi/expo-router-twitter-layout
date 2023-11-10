// Define the permission data for different types of permissions
export const permissionData = {
  Notification: {
    title: 'Notifications',
    text: 'To get alerts for the status of your cards and transactions, turn them on in your device settings for the full experience!',
    iconA: require('../../../assets/img/icon-banana.png'),
    iconB: require('../../../assets/img/icon-messages.png'),
    textA: 'Get alerts for total stats',
    textB: 'Alerts for new features',
  },
  Camera: {
    title: 'Camera Access',
    text: 'We need access to your camera to allow you to scan barcodes of your customers cards!',
    iconA: require('../../../assets/img/icon-banana.png'),
    iconB: require('../../../assets/img/icon-messages.png'),
    textA: 'Scan Barcodes directly',
    textB: 'We never access or share your your media',
  },
  Media: {
    title: 'Media Access',
    text: 'We need access to your media to allow you to upload your brand logo.',
    iconA: require('../../../assets/img/icon-banana.png'),
    iconB: require('../../../assets/img/icon-messages.png'),
    textA: 'Customize your brand logo',
    textB: 'Your media is secure and private',
  },
  Location: {
    title: 'Location Access',
    text: 'We need your location to allow your cards to choose the right locations of your store. We won’t share your location with anyone else, Promise!',
    iconA: require('../../../assets/img/icon-banana.png'),
    iconB: require('../../../assets/img/icon-messages.png'),
    textA: 'Store locations setup',
    textB: 'Your location status private',
  },
};
