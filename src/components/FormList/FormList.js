import React from "react";
import classes from "./FormList.module.css";
import Card from "../UI/Card";

const FormList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((input) => (
          <li key={input.id}>
            {input.age} ({input.name} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default FormList;
