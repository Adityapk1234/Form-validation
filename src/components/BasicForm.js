import useOutput from "../hooks/use-output";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstIsValid,
    hasError: firstHasError,
    reset: resetFirst,
    valueInputBlurHandler: firstInputBlurHandler,
    valueInputHandler: firstInputHandler,
  } = useOutput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastIsValid,
    hasError: lastHasError,
    reset: resetLast,
    valueInputBlurHandler: lastInputBlurHandler,
    valueInputHandler: lastInputHandler,
  } = useOutput((value) => value.trim() !== "");

  const {
    value: enteredEmailName,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    valueInputBlurHandler: emailInputBlurHandler,
    valueInputHandler: emailInputHandler,
  } = useOutput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirst();
    resetLast();
    resetEmail();
  };

  const firstInputClasses = firstHasError
    ? "form-control invalid"
    : "form-control";

  const lastInputClasses = lastHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstInputHandler}
            onBlur={firstInputBlurHandler}
            value={enteredFirstName}
          />
          {firstHasError && (
            <p className="error-text">Please enter first name</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastInputHandler}
            onBlur={lastInputBlurHandler}
            value={enteredLastName}
          />
          {lastHasError && <p className="error-text">Please enter last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmailName}
        />
        {emailHasError && <p className="error-text">Please enter email name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
