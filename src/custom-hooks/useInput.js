import { useState } from 'react';
const useInput = (validateInputValue) => {
  const [enteredInputValue, setEnteredInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputValueIsValid = validateInputValue(enteredInputValue);
  const hasError = !inputValueIsValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setEnteredInputValue(event.target.value);
  };

  //when you hover off/unfocus an input box
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  //For resetting the invalid error warning
  const reset = () => {
    setEnteredInputValue('')
    setIsTouched(false)
  }
  return {
    inputValue: enteredInputValue,
    isValid: inputValueIsValid,
    hasError,
    inputValueChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;
