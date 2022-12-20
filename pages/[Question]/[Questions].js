import React from "react";
import { homeData } from "../../data/homeData";
import styles from "../../styles/Web/GoogleQuestions.module.scss";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Questions(appdata) {
  const { asPath } = useRouter();

  var language = "";
  if (asPath == "/google/questions") {
    language = "Google";
    homeData.api_homeRevamp.map((data, i) => {
      if (data.type == "GoogleQuestions") {
        console.log(data.url);
        appdata = data;
      }
    });
  } else if (asPath == "/amazon/questions") {
    language = "Google";
    homeData.api_homeRevamp.map((data, i) => {
      if (data.type == "AmazonQuestions") {
        console.log(data.url);
        appdata = data;
      }
    });
  }

  return (
    <div>
      <section
        className={styles.container}
        id="questions"
        style={{ paddingBottom: "1.5rem" }}
      >
        <div className={styles.title}>
          <h1 className={styles.textCenter}>{appdata.title}</h1>
          <hr />
        </div>

        {appdata.list?.map((data, i) => (
          <>
            {/* <a
            href={data.url}
            target="_blank"
            styles={{ decoration: "none", color: "#333333" }}
          >
            hhllld
          </a> */}

            <div className={styles.problem}>
              <Link href={`/google/questions/${data.url}`}>
                <button className={styles.problemButton}> Solve Now </button>
              </Link>

              <div className={styles.problemType} style={{ paddingBottom: 0 }}>
                {data.title}
              </div>
              <div
                className={styles.problemDescription}
                style={{ margin: "10px 0" }}
              >
                {data.description}
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
}
