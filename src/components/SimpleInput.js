import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //
  const nameInputChangHandler = (e) => {
    setEnteredName(e.target.value);
  };
  //
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    //
    setEnteredNameTouched(true);
    //
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log({ enteredValue });
    setEnteredName(''); //you cant do this in useRef 2
    // nameInputChangHandler.current.value ="" this is not work bcz we dont direclt manipulate dom
  };
  //
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
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
          ref={nameInputRef}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
