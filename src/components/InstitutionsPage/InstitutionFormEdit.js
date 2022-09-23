import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function InstitutionFormEdit() {
  const { id } = useParams();
  const [insObject, setInsObject] = useState({
    phone: "",
    name: "",
    location: "",
  });
  useEffect(() => {
    const fetchInstitution = async () => {
      let data = await fetch(`http://localhost:8080/api/institutions/${id}`);
      data = await data.json();
      setInsObject(data);
      console.log(data);
    };

    fetchInstitution();
  }, []);

  const [error, setError] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const nameHandleChange = (value, name) => {
    setInsObject({ ...insObject, [name]: value });
  };
  const phoneHandleChange = (value, phone) => {
    setInsObject({ ...insObject, [phone]: value });
  };
  const locationHandleChange = (value, location) => {
    setInsObject({ ...insObject, [location]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      insObject.name.trim().length === 0 ||
      insObject.location.trim().length === 0 ||
      insObject.phone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para editar un comedor",
      });
      return;
    }
    const jsonBody = {
      name: insObject.name,
      phone: insObject.phone,
      location: insObject.location,
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
    setInsObject(data);
    console.log(data);
  };

  return (
    <Layout title="Comedores">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar comedor</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <input
              type="text"
              value={insObject.name}
              onChange={(e) => nameHandleChange(e.target.value, "name")}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <input
              type="text"
              value={insObject.location}
              onChange={(e) => locationHandleChange(e.target.value, "location")}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <input
              type="text"
              value={insObject.phone}
              onChange={(e) => phoneHandleChange(e.target.value, "phone")}
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

export default InstitutionFormEdit;
