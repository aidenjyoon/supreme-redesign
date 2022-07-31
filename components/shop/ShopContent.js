import styles from "./ShopContent.module.scss";

const dummyData = [1, 2, 3];

const ShopContent = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.images}>
          {dummyData.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
          {dummyData.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>

        {/* add a list map to display all the items. */}
      </section>
    </>
  );
};

export default ShopContent;
