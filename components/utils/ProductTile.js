import styles from "./ProdcutTile.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const dummyData = [
  { src: "/images/ss22lookbook/image1.jpg", alt: "image1" },
  { src: "/images/ss22lookbook/image2.jpg", alt: "image2" },
  { src: "/images/ss22lookbook/image3.jpg", alt: "image3" },
  { src: "/images/ss22lookbook/image4.jpg", alt: "image4" },
  { src: "/images/ss22lookbook/image5.jpg", alt: "image5" },
];

const ProductTile = () => {
  const slider = useRef(null);

  return (
    <>
      {/* main preview */}
      <div className={styles.productTile}>
        <div className={styles.product__images}>
          {dummyData.map((img, idx) => {
            return (
              <>
                <div className={styles.slide__image} key={idx}>
                  <Link href="/test3">
                    <a>
                      <Image
                        src={img.src}
                        width={892}
                        height={1249}
                        alt={img.alt}
                      />
                    </a>
                  </Link>
                </div>
              </>
            );
          })}
        </div>

        {/* style preview */}
        <div className={styles.product__preview}>
          {dummyData.map((img, idx) => {
            return (
              <>
                <div className={styles.thumbnail} key={idx} id={idx}>
                  <button>
                    <Image
                      src={img.src}
                      width={892}
                      height={1249}
                      alt={img.alt}
                    />
                  </button>
                </div>
              </>
            );
          })}
        </div>

        {/* information */}
        <div className={styles.product__info}>
          <p className={styles.product__name}>Name of Clothing</p>
          <p className={styles.product__price}>$40.00</p>
        </div>
      </div>
    </>
  );
};

export default ProductTile;
