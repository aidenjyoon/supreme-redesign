import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">Clothing</Link>
          </li>
          <li>
            <Link href="/">Shoes</Link>
          </li>
          <li>
            <Link href="/">Skate</Link>
          </li>
          <li>
            <Link href="/">Accessories</Link>
          </li>
          <li>
            <Link href="/lookbook">Lookbook</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/">Maiilinglist</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
