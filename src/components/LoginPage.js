import React from "react";
import { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Buttons/Button";
import Card from "./Card/Card";
import style from "./Card/Card.module.css";
import AuthContext from "./Store/auth-context";
import ErrorModal from "./Modal/ErrorModal";

function Login() {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(user, password).then(
      (response) => {
        if(!response){
        setError({
          title: "Error",
          message:
            "No se ha podido crear la autoridad, por favor comuniquese con el area de sistemas",
        });}
      }
    );
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={style.login}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <form onSubmit={LoginHandler}>
        <label>
          <b>Usuario</b>
        </label>
        <TextField
          id="text-field group"
          style={{ width: "35rem" }}
          variant="outlined"
          inputProps={{
            style: { width: "35rem" },
          }}
          type="text"
          placeholder="Ingrese nombre de usuario"
          value={user}
          onChange={userHandler}
        />
        <label>
          <b>Contraseña</b>
        </label>
        <TextField
          id="text-field group"
          style={{ width: "35rem" }}
          variant="outlined"
          inputProps={{
            style: { width: "35rem" },
          }}
          type="password"
          placeholder="Ingrese contraseña"
          value={password}
          onChange={passwordHandler}
        />
        <div>
          <Button type="submit">Iniciar sesion</Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
