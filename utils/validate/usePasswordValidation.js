import { useState, useEffect } from 'react';

export function usePasswordValidation(password) {
  const [errorPassword, setErrorPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validatePassword(password));
  }, [password]);

  function validatePassword(password) {
    // Check if password is not empty
    if (password?.length === 0) {
      setErrorPassword('Password is empty');
      return false;
    }

    // Check if password is more than 6 characters
    if (password?.length < 6) {
      setErrorPassword('Password must be more than 6 characters');
      return false;
    }

    // Check if password contains no spaces
    if (password.indexOf(' ') !== -1) {
      setErrorPassword('Password must not contain spaces');
      return false;
    }

    // Check if password contains no symbols
    if (/[^a-zA-Z0-9]/.test(password)) {
      setErrorPassword('Password must not contain symbols');
      return false;
    }

    // Check if password contains no unwanted characters
    if (/[^a-zA-Z]/.test(password)) {
      setErrorPassword('Password must not contain unwanted characters');
      return false;
    }

    // If all checks pass, reset error password and return true
    setErrorPassword('');
    return true;
  }

  return { password, errorPassword, isValid };
}
