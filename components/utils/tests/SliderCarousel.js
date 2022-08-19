import styles from "./SliderCarousel.module.scss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SliderCarousel = (props) => {
  const { slides } = props;

  // const [current, setCurrent] = useState(0);
  // const [isDown, setIsDown] = useState(false);
  // const [startX, setStartX] = useState(null);
  // const [_transLeftOffset, setTransLeftOffset] = useState(null);

  const length = slides.length;

  const slider = useRef(null);
  const innerSlider = useRef(null);

  // slider click & drag function

  // useEffect(() => {
  //   const s = slider.current;
  //   const is = innerSlider.current;
  //   console.log(s);
  //   // let slider = document.querySelector("#carousel__slide");
  //   // let innerSlider = document.querySelector(".carousel__track");
  //   let pressed = false;
  //   let startx;
  //   let x;

  //   s.addEventListener("mousedown", (e) => {
  //     pressed = true;
  //     startx = e.offsetX - innerSlider.offsetLeft;
  //     s.style.cursor = "grabbing";
  //   });

  //   s.addEventListener("mouseenter", () => {
  //     s.style.cursor = "grab";
  //   });

  //   s.addEventListener("mouseup", () => {
  //     s.style.cursor = "grab";
  //   });

  //   window.addEventListener("mouseup", () => {
  //     pressed = false;
  //   });

  //   s.addEventListener("mousemove", (e) => {
  //     if (!pressed) return;
  //     e.preventDefault();

  //     x = e.offset;

  //     innerSlider;
  //   });
  // }, [pressed]);
  const handleMouseDown = (e) => {
    const carousel = innerSlider.current;
    carousel.style.cursor = "grabbing";

    carousel.classList.add("active");
  };

  const handleMouseUp = (e) => {
    const carousel = innerSlider.current;
    carousel.style.cursor = "grab";

    carousel.classList.remove("active");
    console.log(innerSlider.current);
  };

  const handleMouseLeave = (e) => {
    const carousel = innerSlider.current;
    carousel.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const carousel = innerSlider.current;
  };

  return (
    <>
      <section className={styles.carousel}>
        <div className={styles.a}>
          {slides.map((slide, index) => {
            <a>{index}</a>;
          })}
        </div>

        <div className={styles.carousel__container}>
          <ul
            className={styles.carousel__track}
            ref={innerSlider}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {slides.map((slide, index) => {
              return (
                <li
                  key={index}
                  className={styles.carousel__slide}
                  // onMouseDown={handleMouseDown}
                  // onMouseLeave={handleMouseLeave}
                  // onMouseUp={handleMouseUp}
                  // onMouseMove={handleMouseMove}
                >
                  <Image
                    src={slide.image}
                    alt="s/s 22 lookbook images"
                    // height={1249}
                    // width={892}
                    layout={"fill"}
                    key={index}
                    className={styles.carousel__image}
                    draggable="true"
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

export default SliderCarousel;
