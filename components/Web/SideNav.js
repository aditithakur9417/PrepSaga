import React from "react";
import styles from "../../styles/Web/Sidenav.module.scss";
function SideNav() {
  return (
 
      <div className={styles.sidenav}>
          <a href="#about">About</a>
          <a href="#interviewProcess">Interview Process</a>
          <a href="#interviewRounds">Interview Rounds</a>
          <a href="#faqBlock">FAQ</a>
      </div>

 
  
  );
}
export default SideNav;
