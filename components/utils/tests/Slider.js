import Image from "next/image";
import React from "react";
import styles from "./Slider.module.scss";

// const dummyData = {
//   image1: {
//     src: "/images/ss22lookbook/image1",
//     alt: "image1",
//   },
//   image2: {
//     src: "/images/ss22lookbook/image2",
//     alt: "image2",
//   },
//   image3: {
//     src: "/images/ss22lookbook/image3",
//     alt: "image3",
//   },
//   image4: {
//     src: "/images/ss22lookbook/image4",
//     alt: "image4",
//   },
// };

const dummyData = [
  { src: "/images/ss22lookbook/image1.jpg", alt: "image1" },
  { src: "/images/ss22lookbook/image2.jpg", alt: "image2" },
  { src: "/images/ss22lookbook/image3.jpg", alt: "image3" },
  { src: "/images/ss22lookbook/image4.jpg", alt: "image4" },
  { src: "/images/ss22lookbook/image5.jpg", alt: "image5" },
];

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slides}>
          {dummyData.map((img, idx) => {
            return (
              <div key={idx}>
                <Image
                  width={892}
                  height={1249}
                  src={img.src}
                  alt={img.alt}
                  layout={"responsive"}
                />
              </div>
            );
          })}
        </div>
        {/* <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a> */}
      </div>
      <div className={styles.thumbnail}>
        {dummyData.map((img, idx) => {
          return (
            <div key={idx}>
              <Image
                width={892}
                height={1249}
                src={img.src}
                alt={img.alt}
                layout={"responsive"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
