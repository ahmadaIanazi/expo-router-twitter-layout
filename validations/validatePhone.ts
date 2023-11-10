import { useState } from 'react';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';

export default function validatePhone () {
  // State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumber, setIsValid] = useState(false);
  const phoneUtil = PhoneNumberUtil.getInstance();

  // Validation function
  const validatePhoneNumber = (number: string) => {
    try {
      const parsedNumber = phoneUtil.parse(number);
      const isValidNumber = phoneUtil.isValidNumber(parsedNumber);
      const numberType = phoneUtil.getNumberType(parsedNumber);

      // Update state based on validation
      if (isValidNumber && numberType === PhoneNumberType.MOBILE) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      // Handle validation error
      setIsValid(false);
    }
  };

  // Handle phone number change
  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
    validatePhoneNumber(number);
  };

  // Validate number and return result
  const validateNumber = (number: string) => {
    const parsedNumber = phoneUtil.parse(number);
    const isValidNumber = phoneUtil.isValidNumber(parsedNumber);
    const numberType = phoneUtil.getNumberType(parsedNumber);

    return isValidNumber && numberType === PhoneNumberType.MOBILE;
  };

  // Return relevant values and functions
  return { phoneNumber, isPhoneNumber, handlePhoneNumberChange,validatePhoneNumber, validateNumber };
};
