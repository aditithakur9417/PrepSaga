import React from "react";
import { useState, useEffect} from "react";
import AmazonD from "../components/Web/AmazonD";
import AmazonM from "../components/Mobile/AmazonM";

const Amazon = () => {
  const [screenWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {screenWidth == 0 ? "" : screenWidth >= 700 ? <AmazonD /> : <AmazonM />}
    </div>
  );
};
export default Amazon;
