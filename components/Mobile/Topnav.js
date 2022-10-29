import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/Fa";
import styles from "../styles/Mobile/Topnav.module.scss";

const Topnav = () => {
  const [navbar, setnavbar] = useState("none");
  const toggleNavbar = () => {
    if (navbar == "none") {
      setnavbar("block");
    } else setnavbar("none");

    console.log(document.querySelector("body").scrollTop);
  };

  return (
    <>
      <div className={styles.topnav}>
        <a href="#home" className={styles.active}>
          Logo
        </a>
        <div id="myLinks" style={{ display: navbar }} onClick={toggleNavbar}>
          <a href="#about">About</a>
          <a href="#interviewProcess">Interview Process</a>
          <a href="#interviewRounds">Interview Rounds</a>
          <a href="#faqBlock">FAQ</a>
        </div>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={toggleNavbar}
        >
          <FaBars />
        </a>
      </div>
    </>
  );
};
export default Topnav;
