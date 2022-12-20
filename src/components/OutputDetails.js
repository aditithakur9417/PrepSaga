import React from "react";
import styles from "../../styles/Web/Landing.module.scss"

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className={styles.outputDetails}>
      <p>
        Status:{" "}
        <span>
          {outputDetails?.status?.description}
        </span>
      </p>
      <p>
        Memory:{" "}
        <span>
          {outputDetails?.memory}
        </span>
      </p>
      <p>
        Time:{" "}
        <span>
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
