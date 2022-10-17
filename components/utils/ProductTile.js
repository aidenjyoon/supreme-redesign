import styles from "./ProductTile.module.scss";

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

const ProductTile = (props) => {
  const { itemData } = props;
  // console.log(itemData);

  const product_image = useRef(null);

  const scrollL = (id) => {
    const slider = product_image.current;
    const scrollVal = (slider.scrollWidth / 5) * id;
    slider.scrollTo({ left: scrollVal, behavior: "smooth" });
  };

  const buttonHandler = (e) => {
    const id = e.nativeEvent.path[2].id;
    scrollL(id);
  };

  const objectMap = (obj, fn) =>
    // {  console.log(obj);
    // };
    {
      let categories = [];
      let item_names = [];
      let properties = [];

      Object.entries(obj).map(([k, v], i) => {
        if (k === "category") {
          categories.push(v);
        } else if (k === "item_name") {
          item_names.push(v);
        } else {
          properties.push(v);
        }
      });
      // console.log("=========>");
      // console.log(categories, item_names, properties);
      // console.log("<=========");
      return [categories, item_names, properties];

      // console.log("=========>");
      // console.log(Object.fromEntries(Object.entries(obj)));
      // console.log("<=========");
    };
  // Object.fromEntries(
  //   Object.entries(obj).map(([k, v], i) => {
  //     console.log(k, v);}
  //     // if (k ==    || v == undefined) {
  //     //   pass;
  //     // }
  //     // console.log([k, v], i);
  //   //   if (v == Object) {
  //   //     obj.map((item) => {
  //   //       item.map((image) => {
  //   //         console.log("IMAGE:");
  //   //       });
  //   //     });
  //   //   }
  //   // })
  // );

  return (
    <>
      <div className={styles.productTile}>
        <div className={styles.product__images} ref={product_image}>
          {itemData.map((obj, idx) => {
            const [category, item_name, object] = objectMap(obj);
            console.log(idx);
            console.log("category: ", category);
            console.log("item name:", item_name);
            console.log("object: ", object);
          })}
        </div>

        <div className={styles.product__preview}>
          {dummyData.map((img, idx) => {
            return (
              <>
                <div className={styles.thumbnail} key={idx}>
                  <button onClick={buttonHandler} key={idx} id={idx}>
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

        <div className={styles.product__info}>
          <p className={styles.product__name}>Name of Clothing</p>
          <p className={styles.product__price}>$40.00</p>
        </div>
      </div>
    </>
  );
};
//   return (
//     <>
//       <div className={styles.productTile}>
//         <div className={styles.product__images} ref={product_image}>
//           {dummyData.map((img, idx) => {
//             // console.log(idx);
//             return (
//               <>
//                 <div className={styles.slide__image} key={idx} id={idx}>
//                   <Link href="/test3">
//                     <a>
//                       <Image
//                         src={img.src}
//                         width={892}
//                         height={1249}
//                         alt={img.alt}
//                       />
//                     </a>
//                   </Link>
//                 </div>
//               </>
//             );
//           })}
//         </div>

//         <div className={styles.product__preview}>
//           {dummyData.map((img, idx) => {
//             return (
//               <>
//                 <div className={styles.thumbnail} key={idx}>
//                   <button onClick={buttonHandler} key={idx} id={idx}>
//                     <Image
//                       src={img.src}
//                       width={892}
//                       height={1249}
//                       alt={img.alt}
//                     />
//                   </button>
//                 </div>
//               </>
//             );
//           })}
//         </div>

//         <div className={styles.product__info}>
//           <p className={styles.product__name}>Name of Clothing</p>
//           <p className={styles.product__price}>$40.00</p>
//         </div>
//       </div>
//     </>
//   );
// };

export default ProductTile;
