import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext({
  isLoggedIn: sessionStorage.getItem("token") ? true : false,
  onLogout: () => {},
  onLogin: (username, password) => {},
  username: "",
  roles: sessionStorage.getItem("roles") || "",
  token: sessionStorage.getItem("token") || "",
  userId: sessionStorage.getItem("userId") || "",
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("token") ? true : false
  );
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("roles");
    setIsLoggedIn(false);
  };

  const loginHandler = async(username, password) => {
    let response;
    await axios
      .post("http://localhost:8080/api/auth/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        setUsername(response.data.username);
        setToken(response.data.accessToken);
        setRoles(response.data.roles);
        setUserId(response.data.id);
        setIsLoggedIn(true);

        sessionStorage.setItem("userId", response.data.id);
        sessionStorage.setItem("token", response.data.accessToken);
        sessionStorage.setItem("roles", response.data.roles);

        navigate("/"); return response = true
      })
      .catch(function(error) {
        response = false
      });
      return response
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        username: username,
        userId: userId,
        roles: roles,
        token: token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
