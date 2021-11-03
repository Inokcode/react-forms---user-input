import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  //
  const nameInputChangHandler = (e) => {
    setEnteredName(e.target.value);
  };
  //
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log({ enteredValue });
    setEnteredName(''); //you cant do this in useRef 2
    // nameInputChangHandler.current.value ="" this is not work bcz we dont direclt manipulate dom
  };
  //
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangHandler}
          ref={nameInputRef}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
