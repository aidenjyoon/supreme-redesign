import TestingLab_productTile from "../../../components/utils/tests/TestingLab_productTile";
import styles from "./producttile.module.scss";

const Test3Page = () => {
  return (
    <>
      <div className={styles.tile}>
        <TestingLab_productTile />
        <TestingLab_productTile />
      </div>
    </>
  );
};

export default Test3Page;
