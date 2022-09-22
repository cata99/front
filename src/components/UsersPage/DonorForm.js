import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import ErrorModal from "../Modal/ErrorModal";
import { useState } from "react";

function DonorForm() {

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredDNI, setEnteredDNI] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredGender, setEnteredGender] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const firstNameChangeHandler=(event) =>{
    setEnteredFirstName(event.target.value);
  }

  const lastNameChangeHandler =(event) =>{
    setEnteredLastName(event.target.value);
  }

  const dniChangeHandler=(event) =>{
    setEnteredDNI(event.target.value);
  }

  const phoneChangeHandler =(event) =>{
    setEnteredPhone(event.target.value);
  }

  const genderChangeHandler =(event) =>{
    setEnteredGender(event.target.value);
  }

  const emailChangeHandler=(event) =>{
    setEnteredEmail(event.target.value);
  }

  const [error, setError] = useState('');

  const errorHandler = () => {
    setError(null);
  };




  return (
    <Layout>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar donante</Title>
        </div>
        <form >
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Nombre</label>
              <input type="text" value={enteredFirstName} onChange={firstNameChangeHandler}></input>
            </div>
            <div className={classes.column}>
              <label>Apellido</label>
              <input type="text" value={enteredLastName} onChange={lastNameChangeHandler}></input>
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>DNI</label>
              <input type="text" value={enteredDNI}  onChange={dniChangeHandler}></input>
            </div>
            <div className={classes.column}>
              <label>Genero</label>
              <input type="text" value={enteredGender}  onChange={genderChangeHandler}></input>
            </div>
          </div>
          <div className={classes.third_row}>
            <div className={classes.column}>
              <label>Telefono</label>
              <input type="text" value={enteredPhone}  onChange={phoneChangeHandler}></input>
            </div>
            <div className={classes.column}>
              <label>Email</label>
              <input type="text" value={enteredEmail}  onChange={emailChangeHandler}></input>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button>Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DonorForm;
