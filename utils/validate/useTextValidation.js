import { useState, useEffect } from 'react';

export function useTextValidation(textInput) {
  const [errorText, setErrorText] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateTextInput(textInput));
  }, [textInput]);

  function validateTextInput(textInput) {
    // Check if input is not empty
    if (textInput?.length === 0) {
      setErrorText('Input is empty');
      return false;
    }

    // Check if input is more than 4 letters
    if (textInput?.length < 4) {
      setErrorText('Input must be more than 4 letters');
      return false;
    }

    // Check if input contains no spaces
    if (textInput.indexOf(' ') !== -1) {
      setErrorText('Input must not contain spaces');
      return false;
    }

    // Check if input contains no symbols
    if (/[^a-zA-Z0-9]/.test(textInput)) {
      setErrorText('Input must not contain symbols');
      return false;
    }

    // Check if input contains no unwanted characters
    if (/[^a-zA-Z]/.test(textInput)) {
      setErrorText('Input must not contain unwanted characters');
      return false;
    }

    // If all checks pass, reset error text and return true
    setErrorText('');
    return true;
  }

  return { textInput, errorText, isValid };
}
