import ShopContent from "../../components/shop/ShopContent";
import { getAllCategories, getAllItems } from "../../helpers/utils";

const ShopPage = (props) => {
  const { categories, items } = props;

  return (
    <>
      <ShopContent categories={categories} items={items} />
    </>
  );
};

const getStaticProps = async () => {
  const allCategories = await getAllCategories();
  const allItems = await getAllItems();

  return {
    props: {
      categories: allCategories,
      items: allItems,
    },
  };
};

export { getStaticProps };
export default ShopPage;
