import Image from "next/image";
import { useState } from "react";
// import { LookBookData } from "./ImageData";
import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  const { slides } = props;

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <>
      <section className={styles.carousel}>
        <div className={styles.carousel__container}>
          <ul className={styles.carousel__track}>
            {slides.map((slide, index) => {
              return (
                <li key={index} className={styles.carousel__slide}>
                  <Image
                    src={slide.image}
                    alt="s/s 22 lookbook images"
                    // height={1249}
                    // width={892}
                    layout={"fill"}
                    key={index}
                    className={styles.carousel__image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Carousel;
