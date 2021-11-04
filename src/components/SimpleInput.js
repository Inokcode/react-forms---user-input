import { useState } from 'react';

const SimpleInput = (props) => {
  const {
    value: enteredName1,
    isValid: enteredNameIsValid1,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  //
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  //
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //
  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvaild = !enteredEmailIsValid && enteredEmailTouched;
  //
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //
  const nameInputChangHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailInputChangHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };
  //
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    //
    setEnteredNameTouched(true);
    //
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  //
  const nameInputClasses = nameInputIsInvalid
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
          onChange={nameInputChangHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
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
