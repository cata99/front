import React, { useContext } from "react";
import AuthContext from "./components/Store/auth-context";
import LoginRoute from "./components/Routes/LoginRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import ReferentRoute from "./components/Routes/ReferentRoute";
import VolunteerRoute from "./components/Routes/VolunteerRoute";

function App() {
  const authCtx = useContext(AuthContext);

  const isUserLogged = () => {
    console.log(authCtx);
    if (authCtx.isLoggedIn) {
      const role = sessionStorage.getItem("roles")
      if (role === "ROLE_ADMIN") {
        return <AdminRoute />;
      } else if (role === "ROLE_REFERENTE") {
        return <ReferentRoute />;
      } else {
        return <VolunteerRoute />;
      }
    } else return <LoginRoute />;
  };
  return <>{isUserLogged()}</>;
}

export default App;
