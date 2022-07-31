import Image from "next/image";
import styles from "./ProductTile.module.scss";

const ProductTile = () => {
  return (
    <>
      <div className={styles.tile__container}>
        <Image
          src={"/images/ss22lookbook/image1.jpg"}
          width={230}
          height={300}
          layout="responsive"
          alt="item image"
        />
      </div>
    </>
  );
};

export default ProductTile;
