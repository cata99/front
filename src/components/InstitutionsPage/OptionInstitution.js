import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import "./InstitutionsStyle.css";
import {Link} from 'react-router-dom';

function OptionInstitution() {
  return (
    <Layout>
      <Card className="options">
        <form>
            <div className="title">
          <h2>Seleccione elemento a crear</h2></div>
          <div className="button-options">
            <Link to="/create_institution"><Button className="new-institution"label="Comedor"></Button></Link>
            <Link to="/create_disease"><Button className="new-disease"label="Enfermedad"></Button></Link>
            <Link to="/create_authority"><Button className="new-authority"label="Autoridad"></Button></Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default OptionInstitution;
