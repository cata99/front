import './Menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul  className="menu">
        <li>
          <a><Link to="/"></Link>Home</a>
        </li>
        <li>
          <a><Link to="/movements"></Link>Movimientos</a>
        </li>
        <li>
          <a><Link to="/institutions"></Link>Institutiones</a>
        </li>
        <li>
          <a><Link to="/users"></Link>Usuarios</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
