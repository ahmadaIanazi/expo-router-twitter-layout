import * as SMS from 'expo-sms';

export async function sendSMS(addresses, message, options = {}) {
  const isAvailable = await SMS.isAvailableAsync();

  if (isAvailable) {
    try {
      const { result } = await SMS.sendSMSAsync(addresses, message, options);

      switch (result) {
        case 'sent':
          console.log('Message sent successfully');
          break;
        case 'cancelled':
          console.log('Message sending cancelled');
          break;
        case 'unknown':
          console.log('Unable to determine the status of the message');
          break;
        default:
          console.log('Unexpected result:', result);
      }
    } catch (error) {
      console.log('Failed to send SMS:', error);
    }
  } else {
    console.log('SMS is not available on this device');
  }
}
