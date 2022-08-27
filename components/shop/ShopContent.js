import styles from "./ShopContent.module.scss";
import ProductTile from "../utils/ProductTile";

const dummyData = [1, 2, 3];

const ShopContent = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.tiles}>
          <ProductTile />
        </div>
        <div className={styles.tiles}>
          <ProductTile />
        </div>
        <div className={styles.tiles}>
          <ProductTile />
        </div>
        <div className={styles.tiles}>
          <ProductTile />
        </div>
        <div className={styles.tiles}>
          <ProductTile />
        </div>
        <div className={styles.tiles}>
          <ProductTile />
        </div>

        {/* add a list map to display all the items. */}
      </section>
    </>
  );
};

export default ShopContent;
