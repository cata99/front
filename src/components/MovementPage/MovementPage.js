import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

import button from "../Buttons/Button.module.css";

function MovementPage(props) {

  const movement=[
    {
      id:'1',
      title: 'donacion'
    },{
      id: '2',
      title:'entrega'
    }

  ]
  return (
    <Layout>
      <MovementFilters></MovementFilters>
      <div className={button.button_div_right}>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
      </div>
      {movement.map((movement) => (
        <GeneralCard title={movement.title} key={movement.id} />
      ))}
    </Layout>
  );
}

export default MovementPage;
