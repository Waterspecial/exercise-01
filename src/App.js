import React, { useState } from "react";
import "./App.css";
import FormList from "./components/FormList/FormList";
import FormInput from "./components/input/FormInput";

const App = () => {
  const [formInput, setFormInput] = useState([]);

  const AddInputHandler = (uName, uAge) => {
    setFormInput((prevInput) => {
      return [
        ...prevInput,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <div>
      <section id="form-form">
        <FormInput onAddInput={AddInputHandler}></FormInput>
      </section>
      <section id="form">
        <FormList
          style={{ textAlign: "center" }}
          items={formInput}
        ></FormList>
      </section>
    </div>
  );
};

export default App;
