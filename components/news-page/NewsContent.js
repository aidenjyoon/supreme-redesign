import Image from "next/image";
// import Logo from "../logo/Logo";
// import Navbar from "../nav/Navbar";
import styles from "./NewsContent.module.scss";

const NewsContent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__content}>
          {/* <div className={styles.container__logo}>
            <Logo />
            <h2>News</h2>
            <Navbar />
          </div> */}
          <div className={styles.container__image}>
            <Image
              src="/images/bomber-jacket.jpg"
              width={514}
              height={585}
              alt="news image"
              layout={"responsive"}
            />
          </div>
          <article className={styles.container__news}>
            <p>date</p>
            <h1>Title</h1>
            <p>news content</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>
              news
              conasddddddddddddddddddasdfasdfasdfasdddddddddddddddddddddddddddtent
            </p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
            <p>news conasdddddddddddddddddddddtent</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
