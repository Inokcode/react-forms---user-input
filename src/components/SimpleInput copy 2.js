import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  //
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //
  const enteredNameIsValid = enteredName.trim() !== '';
  //
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  //
  const nameInputChangHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
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
  };

  //
  const nameInputClasses = nameInputIsInvalid
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
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
