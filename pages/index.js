import Webroutes from "./Webroutes";
import Approutes from "./Approutes";
import { useState, useEffect } from 'react';

export default function Home() {

  const [screenWidth,setInnerWidth] = useState(0);
  
  useEffect(() => {

    setInnerWidth(window.innerWidth);
  },[]);

  return (

    <div>
      {screenWidth == 0 ? '':(screenWidth <= 700? <Approutes/>: <Webroutes/>)}
    </div>
      
  );
}