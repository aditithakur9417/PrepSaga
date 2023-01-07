import React,{useState} from "react";
import { classnames } from "../utils/general";
import styles from "../../styles/Web/Landing.module.scss"
import { useRouter } from "next/router";
import { homeData } from "../../data/homeData";

const CustomInput = ({ customInput, setCustomInput }) => {



  const { asPath } = useRouter();
  const array = asPath.split("/");
  var question = array[3];

  homeData.api_homeRevamp.map((data, i) => {
    if (data.type == "GoogleQuestions") {
      data.list.map((data, i) => {
        if (data.url == `/${question}`) {
          // customInput = data.input;
        }
      });
    }
  });

  return (
    <>
      {" "}
      <textarea
        rows="5"
        value={2}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={styles.customInput}
        readOnly={true}
      ></textarea>
    </>
  );
};

export default CustomInput;
