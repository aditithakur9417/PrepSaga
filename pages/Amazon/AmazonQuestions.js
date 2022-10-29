import React from "react";
import { useState } from "react";
import { homeData } from "../../data/homeData";
import styles from "../../styles/Mobile/GoogleQuestions.module.scss";

const AmazonQuestions = (appdata) => {

  homeData.api_homeRevamp.map((data, i) => {
    if (data.type == "AmazonQuestions") {
      console.log(data.url);
      appdata = data;
    }
  });


  return (
    <>
      <section className={styles.container} id="questions" style={{paddingBottom:"1.5rem"}}>
        <div className={styles.title}>
          <h1 className={styles.textCenter}>{appdata.title}</h1>
          <hr />
        </div>
        
        {appdata.list?.map((data, i) => (
        <a
          href="/problems/gas-station/"
          target="_blank"
          styles={{ decoration: "none", color: "#333333" }}
        >
          <div className={styles.problem}>
            <button className={styles.problemButton}> Solve Now </button>
            <div className={styles.problemType} style={{paddingBottom:0}}>
              {data.title}
            </div>
            <div
              className={styles.problemDescription}
              style={{ margin: "10px 0" }}
            >
             {data.description}
            </div>
          </div>
        </a>
        ))}

      </section>
    </>
  );
};
export default AmazonQuestions;
