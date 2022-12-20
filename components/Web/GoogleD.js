import React from "react";
import SideNav from "./SideNav";
import styles from "../../styles/Web/Google.module.scss";

const GoogleD = () => {
  return (
    <div className={styles.parent}>
     <SideNav />

      <div className={styles.container}>
        <div id="about" className={styles.about}>
          <h1 style={{ textAlign: "center", color: "rgb(51, 51, 51)" }}>
            About Google
          </h1>
          <hr />
          <p>
            Founded by Larry Page and Sergey Brin in 1998, Google LLC is an
            American multinational technology company which specializes in
            services and products related to the Internet, for instance, cloud
            computing, online advertising technologies, a search engine,
            software, and hardware. Google is one of the Big Five companies in
            the United States Information Technology industry, along with
            Amazon, Apple, Microsoft, and Facebook.
          </p>
        </div>

        <div className={styles.interviewBlock}>
          <div className={styles.title}>
            <h1 className={styles.textCenter}>Google Interview Process</h1>
            <hr />
          </div>

          <div id="interviewProcess" className={styles.interviewProcess}>
            <h2 style={{ textAlign: "center", margin: 0 }}>
              Interview Process
            </h2>

            <ol>
              <li>
                <b>Recruiter Connect</b>: Recruiter can contact the candidate
                based on his/her profiles on Linkedin etc or if any of his/her
                known has referred him/her to the company. However, it’s always
                best to message the recruiters via linkedin and apply for the
                roles in the Career page of Google. If the candidate is good in
                DS &amp; Algo skills it is highly recommended that he/she
                participate in Google Kickstart, this is Google’s hiring contest
                which happens 6 times in a year. If the performance in those
                competitions is good the recruiters will contact you easily.
              </li>
              <li>
                <b>Interview Rounds</b>: Google has a total of 7 rounds. First
                two are telephonic interviews where the interviewer mostly asks
                one medium or two easy Algo DS problems to the candidate and the
                candidate has 45 minutes to solve the problems. However if the
                performance in Kickstart is good, these rounds are skipped and
                you directly move to the next rounds. Next we have 5 onsite
                interviews out of which 4 are Algo DS interviews and 1 is
                Googliness interview, Googliness interview is mostly a
                behavioral interview.
              </li>
              <li>
                <b>After Interviews</b>: Once the interviews are over, the
                recruiter will contact you with the feedback of the interviews,
                if the performance is good and the interviews are cleared your
                profile goes to the different teams in Google for the team
                matching round. In the team matching round the team understands
                your work style and your interests and you can understand their
                requirements and the work expectations of the team.
              </li>
              <li>
                <b>Hired</b>: Once the team and you both are comfortable and
                ready to start, the offer letter is prepared and shared with you
                by the recruiters and you are HIRED!
              </li>
            </ol>
          </div>
          <div id="interviewRounds" className={styles.interviewRounds}>
            <h2 style={{ textAlign: "center", marginBottom: 0 }}>
              Interview Rounds
            </h2>

            <ol>
              <li>
                <b>Telephonic Interviews (Two Rounds)</b> These are two 45
                minute interviews on the phone where the interviewer shares a
                Google Doc with the candidate and asks either a medium problem
                or two easy problems of Algorithms and DS. It is expected that
                the candidate first explains the solution of the problem to the
                interviewer and then codes the problem on google doc within the
                time of the interview. (Suggestion: Practice writing the code on
                google doc if you have any interview coming up as it is a
                different experience compared to writing the code in any text
                editor).
              </li>
              <li>
                <b>Algo DS Interviews (Three or Four Rounds)</b> These are 45
                minute interviews where the interviewer shares a Google Doc with
                the candidate and asks Medium to Hard problems of Algorithms and
                DS. It is expected that the candidate first explains the
                solution of the problem to the interviewer and then codes the
                problem on google doc within the time of the interview.
              </li>
              <li>
                <b>Googliness Interviews (One Round)</b> This is a new interview
                which Google started in 2020. It’s mostly the behavioral
                interview to check the cultural fitness of the candidate in the
                company.
              </li>
            </ol>
          </div>
        </div>
        <a
          href="/google/questions"
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
                How many rounds are there in Google Interview?
              </div>
              <div>
                6-7 (Telephonic Interviews - 2 Rounds, DS &amp; Algo Interviews
                - 3 or 4 Rounds, Googliness Interviews -1 Round).
                <a href="#interviewProcess">Find out More.</a>
              </div>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>
                Why do you want to join Google?
              </div>
              <div>
                There are a lot of high quality products which Google employees
                work on every day and the amount of opportunity that Google
                presents its employees is humongous. Also, the work culture is
                really good over there and the compensation offered to Google
                employees is on the higher end of the standards of the
                Information Technology or Software Industry.
              </div>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>
                Are Google interviews hard?
              </div>
              <div>
                The toughness of an interview depends upon the amount of hard
                work you have put in to prepare for them. Usually, the questions
                asked in a standard Google interview are of Easy to Medium Level
                but it varies from person to person. Since the number of
                interview rounds range anywhere from four to seven, it can be
                intimidating at times for a candidate. But if you are in, it is
                going to be worth the effort.
              </div>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>
                Can I apply for multiple roles at Google?
              </div>
              <div>
                Yes, we can apply to any role that aligns with both our
                interests and skills. We are evaluated against the requirements
                for each role and we can give interviews for different roles at
                the same time. But one should note that within a span of thirty
                days, one can apply only for three roles at Google.
              </div>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>
                What are some of the questions which one should ask the
                interviewer at Google?
              </div>
              <div>
                It is always nice to ask questions about the company’s culture
                and what is the current technology using which the company makes
                its products. Asking about the future innovations at Google also
                might be a good idea as it might make the interviewer believe
                that you are looking forward to joining Google for a long time.
                You can also ask about the interviewer’s personal experience at
                Google and what skills which you must develop before you join
                the job.
              </div>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>What is Googleyness?</div>
              <div>
                Googleyness can be thought of as a set of qualities that makes
                one stand out from the pack and fit into the unique work culture
                of Google. However, this term has not been officially confirmed
                by Google. Some of these qualities are as follows -
                <ul>
                  <li>Striving for excellence and doing the right thing.</li>
                  <li>Keeping an eye on the goals.</li>
                  <li>Being proactive and ready to go the extra mile.</li>
                  <li>
                    Doing something nice for others, without expecting anything
                    in return.
                  </li>
                  <li>
                    Valuing users and colleagues and rewarding great
                    performance.
                  </li>
                  <li>Being transparent, honest, and fair.</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default GoogleD;
