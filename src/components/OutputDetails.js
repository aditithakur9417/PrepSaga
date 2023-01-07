import React,{useState, useEffect} from "react";
import styles from "../../styles/Web/Landing.module.scss"

const OutputDetails = ({ outputDetails, Isanswer, v }) => {

  var test=atob(outputDetails.stdout)
  // if(test==4){
  //   alert("condition called")
  //   outputDetails?.status?.id=4;
  // }


  return (
 <>


    <div className={styles.outputDetails}>
         {console.log(outputDetails)}
      <p>
      Status:{" "}  
        {Isanswer?<>   
        <span style={{color:"#00D900"}}>
          {outputDetails?.status?.description}
        </span></>
        :
        <span style={{color:"red"}}>
          Wrong Answer
          </span>}

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
    </>
  );
};

export default OutputDetails;
