import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import { useState } from "react";

function CreateDisease() {
  const [enteredName, setEnteredName] = useState('');


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };

  const submitHandler = (event) =>{

    const jsonBody= {
      label: enteredName
    }
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonBody)
  };
  console.log(requestOptions);
    fetch('http://localhost:8080/api/diseases/', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result) );
  };

  return (
    <Layout>
      <Card className="new-disease-card">
        <form onSubmit={submitHandler}>
        <Title label="Registrar enfermedad"></Title>
        <div className="title-authority">
          <div className="string-input">
            <label>Nombre</label>
            <input
              type="text"
              className="name-input"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
        </div>
        <div className="create-button-div">
          <Button type="submit"className="create-button" label="Registrar"></Button>
        </div>
        </form>
      </Card>
    </Layout>
  );
}

export default CreateDisease;
