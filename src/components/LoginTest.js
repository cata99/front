import axios from "axios";
import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Buttons/Button";
import Card from "./Card/Card";
import style from "./Card/Card.module.css";


function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/signin", {
        username: user,
        password: password,
      })
      .then(function(response) {
        console.log(response);
        debugger;
      })
      .catch(function(error) {
        console.log(error);
        debugger;
      });
  };

  return (
    <Card className={style.login}>
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
        <Button type="submit">Iniciar sesion</Button></div>
      </form>
    </Card>
  );
}

export default Login;
