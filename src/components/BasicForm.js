import useInputField from '../custom-hooks/useInputField';

const BasicForm = (props) => {
  const {
    inputValue: enteredName,
    inputValueChangedHandler: nameChangedHandler,
    inputValueBlurHandler: nameBlurHandler,
    inputValueIsValid: nameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
  } = useInputField((value) => value.trim() !== '');

  const {
    inputValue: enteredLastName,
    inputValueChangedHandler: lastNameChangedHandler,
    inputValueBlurHandler: lastNameBlurHandler,
    inputValueIsValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    reset: resetLastNameInput,
  } = useInputField((value) => value.trim() !== '');

  const {
    inputValue: enteredEmail,
    inputValueChangedHandler: emailChangedHandler,
    inputValueBlurHandler: emailBlurHandler,
    inputValueIsValid: emailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailInput,
  } = useInputField((value) => value.includes('@'));

  let formIsValid = false;
  if (nameIsValid & emailIsValid & lastNameIsValid) {
    formIsValid = true;
  }

  //submit
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //reset
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className='error-text'>Name must not be empty</p>
          )}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Last name must not be empty</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email</p>
        )}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
