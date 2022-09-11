import './Menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul  className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/movements">Movimientos</Link>
        </li>
        <li>
          <Link to="/institutions">Institutiones</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
