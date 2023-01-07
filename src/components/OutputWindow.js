import React,{useEffect} from "react";
import styles from "../../styles/Web/Landing.module.scss"
import Landing from "./Landing";
const OutputWindow = ({ outputDetails}) => {


console.log(outputDetails)
  var test;
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;
test=atob(outputDetails.stdout)

useEffect(() => {
  // <Landing outputValue="2"/>
  // alert(outputDetails)
}, [])
    if (statusId === 6) {
      // compilation error
      return (
        <pre className={styles.errorRed}>
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
   
      // alert(test)
      return (
        <pre className={styles.errorGreen}>
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className={styles.errorRed}>
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className={styles.errorRed}>
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };


  return (
    <>

      {/* <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2"> */}
<h1>
        Output
      </h1>
      <div className={styles.outputScreen}>
        {outputDetails ? <>{getOutput()}</> : null}
       {console.log("test-"+test)}
      </div>
    </>
  );
};

export default OutputWindow;
