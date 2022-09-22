import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";

import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

import { useState } from "react";
import { useParams } from "react-router-dom";


function AuthorityFormEdit() {
    const { id } = useParams();
    const [authObject, setAuthObject] = useState({
      phone: "",
      label: "",
      location: "",
    });

    useEffect(() => {
        const fetchAuthority = async () => {
          let data = await fetch(`http://localhost:8080/api/authorities/${id}`);
          data = await data.json();
          setAuthObject(data);
          console.log(data);
        };
    
        fetchAuthority();
      }, []);


  const [error, setError] = useState("");

  const submitHandler = async(event) => {
    event.preventDefault();
    if (
        authObject.label.trim().length === 0 ||
        authObject.location.trim().length === 0 ||
        authObject.phone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para editar un comedor",
      });
      return;
    }
    const jsonBody = {
      label: authObject.label,
      phone: authObject.phone,
      location: authObject.location,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    let data = await fetch(
      `http://localhost:8080/api/institutions/${id}`,
      requestOptions
    );
    data = await data.json();
    setAuthObject(data);
    console.log(data);
  }

  const errorHandler = () => {
    setError(null);
  };

  const labelHandleChange = (value, label) => {
    setInsObject({ ...insObject, [label]: value });
  };
  const phoneHandleChange = (value, phone) => {
    setInsObject({ ...insObject, [phone]: value });
  };
  const locationHandleChange = (value, location) => {
    setInsObject({ ...insObject, [location]: value });
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
          <Title>Editar autoridad</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <input
              type="text"
              className="name-input"
              value={authObject.label}
              onChange={labelHandleChange}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <input
              type="text"
              className="location-input"
              value={authObject.location}
              onChange={phoneHandleChange}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <input
              type="text"
              className="phone-input"
              value={authObject.phone}
              onChange={locationHandleChange}
            ></input>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AuthorityFormEdit;
