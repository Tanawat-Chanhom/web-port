import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Title from "react-vanilla-tilt";
import Typed from "typed.js";
import { TweenMax, Power3 } from "gsap";
import useWindowSize from "../../hooks/useWindowSize";

//Components
import TextSlider from "../../components/TextSlider/TextSlider";
import Work from "../../components/Work/Work";

export default function Index() {
  //HOOK
  const size = useWindowSize();

  useEffect(() => {
    TweenMaxEffect();
    setTimeout(() => {
      TypedEffect();
    }, 3000);
    SpliteText();
  }, [size.height]);

  //Typed Effect
  const TypedEffect = () => {
    let options = {
      strings: [
        "Student of KMITL.",
        "UX / UI Design.",
        "Front-End.",
        "Back-End.",
        "Software engineer.",
      ],
      typeSpeed: 100,
      loop: true,
      shuffle: true,
    };
    new Typed("#typed", options);
  };

  //TweenMax Effect
  const TweenMaxEffect = () => {
    TweenMax.from("#backgroundTextfromLeft", 1, {
      opacity: 0,
      x: 2000,
      ease: Power3.easeInOut,
    });
    TweenMax.to("#backgroundTextfromLeft", 700, {
      x: -2000,
      ease: Power3.ease,
      delay: 1,
    });
    TweenMax.from("#backgroundTextfromRight", 1, {
      opacity: 0,
      x: -3000,
      ease: Power3.easeInOut,
    });
    TweenMax.to("#backgroundTextfromRight", 700, {
      x: 2000,
      ease: Power3.ease,
      delay: 1,
    });
    TweenMax.from(
      "#slideShow",
      1.7,
      {
        opacity: 0,
        width: 0,
        ease: Power3.easeOut,
        delay: 1.2,
      },
      1
    ).then(() => {
      document.getElementById("slideShow").style.overflow = "unset";
    });
    TweenMax.from(
      "#scaleEffect",
      1,
      {
        transform: "scale(0)",
        ease: Power3.easeOut,
        delay: 1.2,
      },
      1
    );
  };

  //Spin Text on ScrollAnimation
  const SpliteText = () => {
    let Text = "SCROLL-ME-SCROLL-ME-";
    let TextContainer = document.getElementById("scrollText");
    let scaleDeg = 360 / Text.length;
    for (let index = 0; index < Text.length; index++) {
      let div = document.createElement("div");
      div.style.transform = `rotate(${scaleDeg * index}deg)`;
      let Label = document.createTextNode(Text[index]);
      div.appendChild(Label);
      TextContainer.appendChild(div);
    }
  };

  return (
    <>
      {/* section 1 */}
      <section className={styles.sectionOne}>
        <div className={styles.backgroundContainer}>
          <div className={styles.backgroundRotate}>
            <p
              className={[
                styles.drukWideFont,
                styles.outline,
                styles.backgroundText,
              ].join(" ")}
              id="backgroundTextfromLeft"
            >
              &lt;/CHANHOM&gt;
            </p>
            <p
              className={[styles.drukWideFont, styles.backgroundText].join(" ")}
              id="backgroundTextfromRight"
            >
              &lt;/TANAWAT&gt;
            </p>
            <p
              className={[
                styles.drukWideFont,
                styles.outline,
                styles.backgroundText,
              ].join(" ")}
              id="backgroundTextfromLeft"
            >
              &lt;/CHANHOM&gt;
            </p>
            <p
              className={[styles.drukWideFont, styles.backgroundText].join(" ")}
              id="backgroundTextfromRight"
            >
              &lt;/TANAWAT&gt;
            </p>
          </div>
        </div>
        <div style={{ position: "absolute" }}>
          <Title className={styles.titleCard}>
            <div id="slideShow" style={{ overflow: "hidden" }}>
              <p
                className={[styles.drukWideFont, styles.webDeveloperBox].join(
                  " "
                )}
              >
                Wep <br />
                Developer
              </p>
            </div>
          </Title>
        </div>
        <div className={styles.quoteContainer} id="slideShow">
          <p
            className={[styles.mainQuote, styles.proFont].join(" ")}
            id="quote"
          >
            Hi👋 I’m TAE,
            <br /> I’m <span id="typed">Student of KMITL.</span>
          </p>
        </div>
        <div className={styles.scrollSignContainer} id="scaleEffect">
          <span className={styles.scrollSign}>
            <span></span>
          </span>
          <div
            id="scrollText"
            className={[styles.scrollText, styles.drukWideFont].join(" ")}
          ></div>
        </div>
      </section>
      <TextSlider text="ABOUT"></TextSlider>
      {/* section 2 */}
      <section className={styles.sectionTwo}>
        <p
          className={[styles.proFont, styles.aboutContent].join(" ")}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Hello, I’m TAE
          <br /> currently a student at Faculty of information technology,
          Software Engineering Major from KMITL. 🇹🇭
        </p>
        <p className={[styles.drukWideFont, styles.skillTitleText].join(" ")}>
          SKILLS 🛠
        </p>
      </section>
      <TextSlider text="WORK"></TextSlider>
      <section className={styles.sectionThree}>
        <Work workName="PAITUM" typeWork="Mobile Application"></Work>
        <Work workName="PAITUM" typeWork="Mobile Application"></Work>
        <Work workName="PAITUM" typeWork="Mobile Application"></Work>
        <Work workName="PAITUM" typeWork="Mobile Application"></Work>
      </section>
      <TextSlider text="EVENT"></TextSlider>
    </>
  );
}
