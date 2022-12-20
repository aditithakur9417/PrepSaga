import React from "react";
import styles from "../../styles/Web/LanguagesGuide.module.scss";

const LanguagesGuide = () => {
  return (
    <>
      <div className={styles.languageContainer}>
        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/173/original/C.png?1652457903"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>C</div>
          </a>
        </div>

        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/174/original/C__.png?1652457962"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>C++</div>
          </a>
        </div>

        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/440/original/Python-01.png?1641367042"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>Python</div>
          </a>
        </div>

        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d0674a51d5ce0bdfbdb5c4734200c466155b277d/0f4a0/_images/logo_java.png"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>Java</div>
          </a>
        </div>

        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/36/22fecf2e9146b7a22cd98016a838db/Square-OS-icon.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>Operating System</div>
          </a>
        </div>

        <div className={styles.boxModel}>
          <a className={styles.clickable}>
            <div className={styles.logoContainer}>
              <img
                src="https://yt3.ggpht.com/h0n8phylgeZKuMlGmcPhkOM8rkV1IHTr5oumqZL581iQCSeMeFrnmYB69a69RQAQoVqgxM5ENX8=s900-c-k-c0x00ffffff-no-rj"
                className={styles.logoImage}
                alt="logo"
              />
            </div>
            <div className={styles.underlineText}>DSA</div>
          </a>
        </div>
      
      </div>
      <p style={{paddingBottom:5}}> More languages will be added soon...</p>
    </>
  );
};
export default LanguagesGuide;
