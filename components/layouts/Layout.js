import Logo from "../logo/Logo";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Logo />
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
