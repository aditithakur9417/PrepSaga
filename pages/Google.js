import React from "react";
import { useState, useEffect } from "react";

import GoogleD from "../components/Web/GoogleD";
import GoogleM from "../components/Mobile/GoogleM";

const Google = () => {
  const [screenWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {screenWidth == 0 ? "" : screenWidth >= 700 ? <GoogleD /> : <GoogleM />}
    </div>
  );
};
export default Google;
