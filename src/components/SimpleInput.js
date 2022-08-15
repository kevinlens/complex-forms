import useInput from '../custom-hooks/useInput';

const SimpleInput = (props) => {
  //passing in user input values and getting back processed data
  const {
    inputValue: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputValueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    //pass in specific anonymous arrow function made for name input
    //that will be used inside custom hook
  } = useInput((value) => value.trim() !== '');

  //passing in user input values and getting back processed data
  const {
    inputValue: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputValueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    //pass in specific anonymous arrow function made for email input
    //that will be used inside custom hook
  } = useInput((value) => value.includes('@'));

  //determines if submit button is clickable
  let formIsValid = false;
  //if both username and email are valid, allow submit button to be clickable
  if (enteredNameIsValid & enteredEmailIsValid) {
    formIsValid = true;
  }

  //upon user submission click
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //reset all input boxes and invalid warning errors
    resetNameInput(); 
    resetEmailInput();
  };

  //for displaying invalid error input
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
    
  //for displaying invalid error input
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
