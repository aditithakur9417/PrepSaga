import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Mobile/Google.module.scss";
import { FaBars } from "react-icons/Fa";

import Topnav from "../components/Mobile/TopNav";

const Amazon = () => {
  return (
    <section className="AmazonGuide">
      <div class="parent">
        <Topnav />

        <div className={styles.container}>
          <div id="about" className={styles.about}>
            <h1 style={{ textAlign: "center", color: "rgb(51, 51, 51)" }}>
              About Amazon
            </h1>
            <hr />
            <p>
              Earth's most 'Customer Centric' company, Amazon was founded by
              Jeff Bezos from his garage in Bellevue, Washington on July 5,
              1994. Amazon is an American multinational technology company whose
              focus is on a large number of fields, for instance, E-Commerce,
              Cloud Computing, Artificial Intelligence, Digital Streaming,
              etcetera. It is considered to be one of the Big Five companies in
              the United States Information Technology industry, along with
              Google, Apple, Microsoft, and Facebook.
            </p>
          </div>

          <div className={styles.interviewBlock}>
            <div className={styles.title}>
              <h1 className={styles.textCenter}>Amazon Interview Process</h1>
              <hr />
            </div>

            <div id="interviewProcess" className={styles.interviewProcess}>
              <h2 style={{ textAlign: "center", margin: 0 }}>
                Interview Process
              </h2>

              <ol>
                <li>
                  <b>Recruiter Connect</b>: Best way to get noticed by Amazon
                  recruiters is to maintain a good Linkedin profile and message
                  recruiters. The candidate can also apply on the Amazon job
                  portal but it is suggested that they also get a referral from
                  an Amazon employee.
                </li>
                <li>
                  <b>Interview Rounds</b>: Amazon conducts four interview rounds
                  alongside an initial coding test. The coding test consists of
                  DS/Algo problems. The first round is an HR round where they
                  ask behavioral questions along with Computer Science theory
                  questions to the candidate. The next three rounds focus solely
                  on DS/Algo.
                </li>
                <li>
                  <b>After Interviews</b>: The recruiter contacts the candidate
                  after these rounds and tells the verdict. They also look at
                  the candidate’s leadership principles along with technical
                  skills.
                </li>
                <li>
                  <b>Hired</b>: Once the team and you both are comfortable and
                  ready to start, the offer letter is prepared and shared with
                  you by the recruiters and you are HIRED!
                </li>
              </ol>
            </div>
            <div id="interviewRounds" className={styles.interviewRounds}>
              <h2 style={{ textAlign: "center", marginBottom: 0 }}>
                Interview Rounds
              </h2>

              <ol>
                <li>
                  <b>HR Round(1 Round)</b> This is when they ask computer
                  science theory and behavioural questions to the candidate. The
                  questions may enquire about the candidate’s experience at
                  previous companies and conflicts the candidate might have
                  faced with colleagues/managers.
                </li>
                <li>
                  <b>Data Structures and Algorithms Rounds(3 Rounds)</b> The
                  candidate is asked DS/Algo problems where production ready
                  code might be expected from the candidate. It is not out of
                  the realm of possibility to face minor behavioural questions
                  here as well. The problems range from easy to hard but they
                  are not the sole deciding factor for the final offer.
                  Leadership principles also come into play here. The interviews
                  are conducted on Amazon Chime.
                </li>
              </ol>
            </div>
          </div>
          <a
            href="/Amazon/AmazonQuestions"
            className={styles.button7}
            style={{ backgroundColor: "#a24dcc", display: "flex" }}
          >
            <span className={styles.button}>Q</span>
            <div className={styles.flexCenter}>
              Amazon High Priority Questions
            </div>
          </a>
          <div className={styles.faqBlock} id="faqBlock">
            <div className={styles.title}>
              <h1 className={styles.textCenter}>FAQ</h1>
              <hr />
            </div>

            <ol>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  What are the Amazon interview rounds?
                </div>
                <div>
                  5 rounds (4- Data Structures and Algorithms, 1- System Design,
                  1- HR).
                  <a href="#interviewProcess" style={{ fontWeight: "bold" }}>
                    {" "}
                    Find out More.
                  </a>
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  Are Amazon interviews hard?
                </div>
                <div>
                  The toughness of an interview depends upon the amount of hard
                  work you have put in to prepare for them. Usually, the
                  questions asked in a standard Amazon interview are of Easy to
                  Medium Level but it varies from person to person.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  How do I apply for a job at Amazon?
                </div>
                <div>
                  You can go to the Amazon Jobs portal and apply for any open
                  role matching your skill set over there.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  Can I apply for multiple roles at Amazon?
                </div>
                <div>
                  Yes, we can apply to any role that aligns with both our
                  interests and skills. We are evaluated against the
                  requirements for each role and we can give interviews for
                  different roles at the same time.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  What are some of the questions which one should ask the
                  interviewer at Amazon?
                </div>
                <div>
                  It is always nice to ask questions about the company's culture
                  and what is the current technology using which the company
                  makes its products. Asking about the future innovations at
                  Amazon also might be a good idea as it might make the
                  interviewer believe that you are looking forward to joining
                  Amazon for a long time. You can also ask about the
                  interviewer's personal experience at Amazon and what skills
                  which you must develop before you join the job.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  How to prepare for the coding interviews at Amazon?
                </div>
                <div>
                  The secret lies in the amount of practice you do. Put in a lot
                  of effort in solving challenging problems on Data Structures
                  and Algorithms. Having a good knowledge of fundamental
                  Computer Science Concepts like Object-Oriented Programming,
                  Computer Networks, Operating Systems, etc. might also be
                  helpful.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  Does Amazon have a dress code?
                </div>
                <div>
                  No, Amazon does not have a dress code. However, all employees
                  are supposed to wear decent clothes at their respective places
                  of work.
                </div>
              </li>
              <li>
                <div style={{ fontWeight: "bold" }}>
                  Is having a project on Web or Android Development or Machine
                  Learning a must for being hired at Amazon?
                </div>
                <div>
                  No, only good problem-solving skills are required to get hired
                  at Amazon for an SDE position. Having said that, you will
                  always get brownie points if you have a good project or two in
                  your Resume as it shows that you are referenced and interested
                  in the domain on which you have made your project.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Amazon;
