import Image from "next/image";
import Link from "next/link";
import styles from "./LookbookContent.module.scss";

const LookbookContent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__images}>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image1.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image2.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image3.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image4.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image5.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image6.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image7.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/ss22lookbook/image8.jpg"
                height={450}
                width={260}
                alt="ss22 image 1"
                className={styles.img}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LookbookContent;
