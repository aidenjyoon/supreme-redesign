import styles from "./ShopContent.module.scss";
import ProductTile from "../utils/ProductTile";
import { getAllCategories } from "../../helpers/utils";

const dummyData = [1, 2, 3];

const ShopContent = (props) => {
  const { categories, items } = props;
  // console.log(categories);
  // console.log("ITEMS:", items);

  return (
    <>
      <section className={styles.container}>
        {/* {categories.map((category, idx) => {
          return (
            <div key={idx} className={styles.tiles}>
              <ProductTile key={idx} itemData={items} />
            </div>
          );
        })} */}
        <div className={styles.tiles}>
          <ProductTile itemData={items} />
        </div>

        {/* <div className={styles.tiles}>
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
        </div> */}
      </section>
    </>
  );
};

export default ShopContent;
