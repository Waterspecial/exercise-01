import React from "react";
import styles from "./FormInput.module.css";
import Button from "../UI/Button";

const FormInput = (props) => {
  return (
    <form>
      <div className={styles["form-control"]}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input type="text" />
        </div>
        <div className={styles["form-control"]}>
          <label>Age(Years) </label>
          <input type="text" />
        </div>
        <Button>Add User</Button>
      </div>
    </form>
  );
};

export default FormInput;
