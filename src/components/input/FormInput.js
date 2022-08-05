import React, { useState } from "react";
import styles from "./FormInput.module.css";
import Button from "../UI/Button";

const FormInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddInput(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          type="number"
          onChange={ageChangeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default FormInput;
