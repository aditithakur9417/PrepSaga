import React from "react";
import Link from "next/link";
import styles from "../../styles/Web/CompaniesGuide.module.scss";
import { FcGoogle } from "react-icons/fc";
import { GrAmazon } from "react-icons/gr";
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { MdArrowForwardIos } from "react-icons/md";

const CompaniesGuide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.block1}>
          <img
            alt="header-logo"
            class="ib-iq-guide-header__left-logo--img"
            src="https://assets.interviewbit.com/packs/images/guide-header-left.7f530e.png"
          />
        </div>
        <div className={styles.block2}>
          <h1 class="ib-iq-guide-header__title">
            Technical Interview Questions
          </h1>
        </div>
        <div className={styles.block3}>
          <img
            class="ib-iq-guide-header__right-logo--img"
            alt="header-logo"
            src="https://assets.interviewbit.com/packs/images/guide-header-right.6bb778.png"
          />
        </div>
      </div>

      <div className={styles.division}>
        <div className={styles.companyList}>
          <div className={styles.card}>
            <div
              className={styles.cardBanner}
              style={{
                background:
                  "linear-gradient(to right, rgb(52, 168, 83), rgb(0, 65, 141))",
              }}
            >
              <div className={styles.companyLogo}>
                <FcGoogle size={38} />
              </div>
              <div className={styles.cardLogocontent}>
                Google
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Interview Process at Google</li>
                <li>Tips for interviewing at Google</li>
                <li>70+ Interview Questions Asked at Google</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
           
              <Link href="/Google">
                  <div className={styles.viewButton} href="/Google">
                    View Full Guide
                  </div>
                </Link>
            </div>
          </div>

          <div className={styles.card}>
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
              <div className={styles.cardLogocontent}>
                Amazon
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Interview Process at Amazon</li>
                <li>Tips for interviewing at Amazon</li>
                <li>100+ Interview Questions Asked at Amazon</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <a
                href="/google-interview-questions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Link href="/Amazon">
                  <div className={styles.viewButton} href="/Google">
                    View Full Guide
                  </div>
                </Link>
              </a>
            </div>
          </div>

          <div className={styles.card}>
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
              <div className={styles.cardLogocontent}>
                Microsoft
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Interview Process at Microsoft</li>
                <li>Tips for interviewing at Microsoft</li>
                <li>100+ Interview Questions Asked at Microsoft</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <a
                href="/google-interview-questions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.viewButton}>View Full Guide</div>
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardBanner}
              style={{
                background:
                  "linear-gradient(to right, rgb(0, 65, 141), rgb(52, 168, 83))",
              }}
            >
              <div className={styles.companyLogo} style={{ color: "black" }}>
                <FaApple size={36} />
              </div>
              <div className={styles.cardLogocontent}>
                Apple
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Basic to advanced interview questions for Java</li>
                <li>Self practice with MCQs</li>
                <li>Practice coding problems from top companies in Java</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <a
                href="/google-interview-questions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.viewButton}>View Full Guide</div>
              </a>
            </div>
          </div>

          <div className={styles.card}>
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
              <div className={styles.cardLogocontent}>
                Meta(Facebook)
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Interview Process at Meta(Facebook)</li>
                <li>Tips for interviewing at Meta(Facebook)</li>
                <li>100+ Interview Questions Asked at Meta(Facebook)t</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <a
                href="/google-interview-questions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.viewButton}>View Full Guide</div>
              </a>
            </div>
          </div>

          <div className={styles.card}>
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
              <div className={styles.cardLogocontent}>
                Adobe
                <br />
                Interview Questions
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Interview Process at Adobe</li>
                <li>Tips for interviewing at Adobe</li>
                <li>100+ Interview Questions Asked at Adobe</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <a
                href="/google-interview-questions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.viewButton}>View Full Guide</div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.headLine}>
          How to Prepare for a Technical Interview?
        </div>
        <div className={styles.description} style={{ marginBottom: "3rem" }}>
          <p>
            Listed below are a few tips for interviewing for technical
            positions:
          </p>
          <ul>
            <li>
              An important step is to review the job description to determine
              what you need to study. This may involve learning data structures,
              coding in a specific language, or using business intelligence
              tools.
            </li>
            <li>
              Explain your approach to solving problems and logical reasoning.
              This points out your problem-solving and critical thinking
              abilities to a hiring manager.
            </li>
            <li>
              Do not hesitate to ask for more information if you do not
              understand the question. In case you do not know the answer to a
              question, tell the interviewer or ask probing Structure to learn
              more. This may aid you in finding the right answer.
            </li>
            <li>
              Attempt coding assignments and brain teasers to improve your
              programming skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CompaniesGuide;
