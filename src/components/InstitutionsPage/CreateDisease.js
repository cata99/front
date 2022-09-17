import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import {useState} from 'react';
import { useSearchParams } from "react-router-dom";


function CreateDisease() {

    const [enteredTitle, setEnteredTitle]= useState

  return (
    <Layout>
      <Card className="new-disease-card">
        <Title label="Registrar enfermedad"></Title>
      <div className="title-authority">
          <StringInput label="Nombre: "></StringInput>
        </div>
        <div className="create-button-div">
          <Button className="create-button" label="Registrar"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default CreateDisease;
