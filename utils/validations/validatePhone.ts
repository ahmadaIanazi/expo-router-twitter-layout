import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';

export const validatePhoneNumber = (number: string): boolean => {
  const phoneUtil = PhoneNumberUtil.getInstance();

  try {
    const parsedNumber = phoneUtil.parse(number);
    const isValidNumber = phoneUtil.isValidNumber(parsedNumber);
    const numberType = phoneUtil.getNumberType(parsedNumber);

    return isValidNumber && numberType === PhoneNumberType.MOBILE;
  } catch (error) {
    return false;
  }
};
