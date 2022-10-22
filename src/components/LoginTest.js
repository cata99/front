import axios from "axios";
import React from "react";
import {useState} from "react";

function LoginTest(){

    const [user, setUser]= useState("");
    const [password, setPassword] = useState ("");

   
    const userHandler = (event) => {
        setUser(event.target.value);
      };  
      const passwordHandler = (event) => {
        setPassword(event.target.value);
      };


    const LoginHandler =(event) =>{

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonBody),
          };
            
            axios.post('http://localhost:8080/api/auth/signin', {
              username: user,
              password: password
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }

return(
    <form onSubmit={LoginHandler}>
        <label>Usuario</label><input type="text" value={user} onChange={userHandler}></input>
        <label>Contraseña</label><input type="password" value={password} onChange={passwordHandler}></input>
        <button type="submit" >Sumbit </button>
    </form>);
}

export default LoginTest;