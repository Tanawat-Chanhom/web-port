import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useRef, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import catTyping from "./assets/images/Cat_typing.gif";
import Index from "./pages/Index/index";
// import kursor from "kursor";

function App() {
  //HOOK
  const size = useWindowSize();

  //REF
  const app = useRef();
  const skewContainer = useRef();

  useEffect(() => {
    document.body.style.height = `${
      skewContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    // Kursor();
    requestAnimationFrame(() => {
      skewScrolling();
    });
  });

  //Skew Scrolling Configs
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //Calcuration for Skew varible
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 10;

    //Set Transform
    // skewContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`;
    skewContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(() => {
      skewScrolling();
    });
  };

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  // const Kursor = () => {
  //   new kursor({
  //     el: ".myBox",
  //     type: 1,
  //     color: "#fff",
  //   });
  // };

  return (
    <div ref={app} className="app myBox">
      {getDeviceType() === "desktop" ? (
        <div ref={skewContainer} className="skew-container">
          <Router>
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <div ref={skewContainer} className="skew-container myBox">
          <div className="not-subport-contianer">
            <image src={catTyping} alt="catTyping" />
            <p>Not Support Your Device.📵</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
