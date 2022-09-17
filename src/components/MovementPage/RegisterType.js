import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function RegisterType() {
  return (
    <Layout>
      <form>
        <Card className="new-type">
          <StringInput className="type-name" label="Nombre"></StringInput>
          <div className="page-button-movement">
            <Link to="/create_movement">
              <Button label="Registrar"></Button>
            </Link>
          </div>
        </Card>
      </form>
    </Layout>
  );
}

export default RegisterType;
