import { useState } from 'react';

const useInputField = (validateInputValue) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputValueChangedHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputValueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  };

  const inputValueIsValid = validateInputValue(inputValue);

  const hasError = isTouched && !inputValueIsValid;

  return {
    inputValue,
    inputValueChangedHandler,
    inputValueBlurHandler,
    inputValueIsValid,
    hasError,
    reset,
  };
};

export default useInputField;
