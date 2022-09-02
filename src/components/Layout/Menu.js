import './Menu.css'

function Menu() {
  return (
    <nav>
      <ul>
        <li className="menu">
          <a href="default.asp">Home</a>
        </li>
        <li  className="menu">
          <a href="news.asp">News</a>
        </li>
        <li  className="menu">
          <a href="contact.asp">Contact</a>
        </li>
        <li  className="menu">
          <a href="about.asp">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
