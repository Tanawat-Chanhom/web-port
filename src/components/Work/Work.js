import React from "react";
import styles from "./work.module.css";
import Title from "react-vanilla-tilt";
import hoverEffect from "hover-effect";

export default function Work(props) {
  new hoverEffect({
    parent: document.querySelector(".test"),
    intensity: 0.3,
    image1: "./1.jpg",
    image2: "./2.jpg",
    displacementImage: "./10.jpg",
  });

  return (
    <Title className={styles.container}>
      <div className={[styles.imageWapper, "test"].join(" ")}>
        {/* <div className={styles.textContainer}>
          <p className={[styles.drukWideFont, styles.outline].join(" ")}>
            {props.workName}
          </p>
          <p className={[styles.drukWideFont].join(" ")}>{props.typeWork}</p>
        </div> */}
      </div>
    </Title>
  );
}
