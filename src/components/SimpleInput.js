import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');
  //
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  //
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //
  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvaild = !enteredEmailIsValid && enteredEmailTouched;
  //
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //
  // const nameInputChangHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  const emailInputChangHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  //
  // const nameInputBlurHandler = (e) => {
  //   setEnteredNameTouched(true);
  // };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };
  //
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    //
    // setEnteredNameTouched(true);
    //
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  //
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvaild
    ? 'form-control invalid'
    : 'form-control';
  //
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      {/*  */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInvaild && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      {/*  */}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
