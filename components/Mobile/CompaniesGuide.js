import React from "react";
import Link from "next/link";
import styles from "../../styles/Mobile/CompaniesGuide.module.scss";
import { FcGoogle } from "react-icons/fc";
import { GrAmazon } from "react-icons/gr";
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { MdArrowForwardIos } from "react-icons/md";

const CompaniesGuide = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>Preperation for Big Tech Companies</div>
      </div>

      <div className={styles.companyList}>
        <div className={styles.companyCard}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(52, 168, 83), rgb(0, 65, 141))",
           }}
           >
            <div className={styles.companyLogo}>
              <FcGoogle size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Google</div>
              <div>Interview Structure</div>
            </div>
            <Link href="/Google">
              <div className={styles.rightArrow}>
                <MdArrowForwardIos size={20} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.companyCard}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(183, 156, 227), rgb(8, 63, 132))",
            }}
          >
            <div className={styles.companyLogo} style={{ color: "black" }}>
              <GrAmazon size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Amazon</div>
              <div>Interview Structure</div>
            </div>

            <div className={styles.rightArrow}>
              <MdArrowForwardIos size={20} />
            </div>
          </div>
        </div>

        <div className={styles.companyCard}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(255, 206, 67), rgb(61, 39, 163))",
            }}
          >
            <div className={styles.companyLogo} style={{ color: "black" }}>
              <FaMicrosoft size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Microsoft</div>
              <div>Interview Structure</div>
            </div>

            <div className={styles.rightArrow}>
              <MdArrowForwardIos size={20} />
            </div>
          </div>
        </div>

        <div className={styles.companyCard}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(48, 42, 119), rgb(245, 187, 46))",
            }}
          >
            <div className={styles.companyLogo} style={{ color: "black" }}>
              <FaApple size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Apple</div>
              <div>Interview Structure</div>
            </div>

            <div className={styles.rightArrow}>
              <MdArrowForwardIos size={20} />
            </div>
          </div>
        </div>

        <div className={styles.companyCard}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(48, 42, 119), rgb(245, 187, 46))",
            }}
          >
            <div className={styles.companyLogo} style={{ color: "black" }}>
              <FaFacebook size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Meta(Facebook)</div>
              <div>Interview Structure</div>
            </div>

            <div className={styles.rightArrow}>
              <MdArrowForwardIos size={20} />
            </div>
          </div>
        </div>

        <div className={styles.companyCard} styles={{ marginBottom: 0 }}>
          <div
            className={styles.cardBanner}
            style={{
              background:
                "linear-gradient(to right, rgb(30, 18, 86), rgb(168, 40, 37))",
            }}
          >
            <div className={styles.companyLogo} style={{ color: "black" }}>
              <SiAdobe size={36} />
            </div>
            <div className={styles.logoContent}>
              <div style={{ fontSize: "1.2rem" }}>Adobe</div>
              <div>Interview Structure</div>
            </div>

            <div className={styles.rightArrow}>
              <MdArrowForwardIos size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headLine}>
        How to Prepare for a Technical Interview?
      </div>
      <div className={styles.description}>
        <p>
          Listed below are a few tips for interviewing for technical positions:
        </p>
        <ul>
          <li>
            An important step is to review the job description to determine what
            you need to study. This may involve learning data structures, coding
            in a specific language, or using business intelligence tools.
          </li>
          <li>
            Explain your approach to solving problems and logical reasoning.
            This points out your problem-solving and critical thinking abilities
            to a hiring manager.
          </li>
          <li>
            Do not hesitate to ask for more information if you do not understand
            the question. In case you do not know the answer to a question, tell
            the interviewer or ask probing Structure to learn more. This may aid
            you in finding the right answer.
          </li>
          <li>
            Attempt coding assignments and brain teasers to improve your
            programming skills.
          </li>
        </ul>
      </div>
    </>
  );
};
export default CompaniesGuide;
