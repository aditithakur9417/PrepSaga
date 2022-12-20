import React from "react";
import { classnames } from "../utils/general";
import styles from "../../styles/Web/Landing.module.scss"

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={styles.customInput}
      ></textarea>
    </>
  );
};

export default CustomInput;
