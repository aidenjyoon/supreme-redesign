import ShopContent from "../../components/shop/ShopContent";
import { getAllCategories } from "../../helpers/utils";

const ShopPage = (props) => {
  const { categories } = props;

  console.log(categories);

  return (
    <>
      <ShopContent />
    </>
  );
};

const getStaticProps = async () => {
  const allCategories = await getAllCategories();

  return {
    props: {
      categories: allCategories,
    },
    revalidate: 1800,
  };
};

export { getStaticProps };
export default ShopPage;
