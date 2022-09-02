import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
    
      <Header>
        <main>{children}</main>
      </Header><Menu></Menu>
    </div>
  );
};

export default Layout;
