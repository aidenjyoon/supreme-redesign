import Logo from "../logo/Logo";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Logo />
          <Navbar />
        </div>

        {props.children}
      </div>
    </>
  );
};

export default Layout;
