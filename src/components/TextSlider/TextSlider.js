import React, { useEffect } from "react";
import styles from "./textSlider.module.css";

export default function TextSlider(props) {
  useEffect(() => {
    Textgenerator();
  }, []);

  const Textgenerator = () => {
    let propsText = props.text + " - ";
    let container = document.getElementById("textContainer" + props.text);
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(propsText.repeat(50)));
    container.appendChild(span);
  };

  return (
    <div
      className={[
        styles.container,
        styles.drukWideFont,
        styles.sliderText,
      ].join(" ")}
    >
      <div
        id={"textContainer" + props.text}
        className={styles.textContainer}
      ></div>
    </div>
  );
}
