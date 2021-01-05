import React from "react";
import styles from "./work.module.css";
import Title from "react-vanilla-tilt";

export default function Work(props) {
  return (
    <Title className={styles.container}>
      <div className={styles.imageWapper}>
        <div className={styles.textContainer}>
          <p className={[styles.drukWideFont, styles.outline].join(" ")}>
            {props.workName}
          </p>
          <p className={[styles.drukWideFont].join(" ")}>{props.typeWork}</p>
        </div>
      </div>
    </Title>
  );
}
