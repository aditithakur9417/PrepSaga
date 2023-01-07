import React, { useEffect, useState } from "react";
import CodeEditorWindow from "../src/components/CodeEditorWindow";
import axios from "axios";
import { classnames } from "../src/utils/general";
import { languageOptions } from "../src/constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../src/lib/defineTheme";
import useKeyPress from "../src/hooks/useKeyPress";

import OutputWindow from "../src/components/OutputWindow";
import CustomInput from "../src/components/CustomInput";
import OutputDetails from "../src/components/OutputDetails";
import ThemeDropdown from "../src/components/ThemeDropdown";
import LanguagesDropdown from "../src/components/LanguagesDropdown";
import styles from "../styles/Web/Compiler.module.scss";

import Question from "../src/components/Question";
import { homeData } from "../data/homeData";
import { DefaultFormat } from "../data/DefaultFormat"

import { useRouter } from "next/router";

var lan;

// const javascriptDefault = `/**
// import '../../styles/Web/tailwind.css'
// * Problem: Binary Search: Search a sorted array for a target value.
// */

// // Time: O(log n)
// const binarySearch = (arr, target) => {
//  return binarySearchHelper(arr, target, 0, arr.length - 1);
// };

// const binarySearchHelper = (arr, target, start, end) => {
//  if (start > end) {
//    return false;
//  }
//  let mid = Math.floor((start + end) / 2);
//  if (arr[mid] === target) {
//    return mid;
//  }
//  if (arr[mid] < target) {
//    return binarySearchHelper(arr, target, mid + 1, end);
//  }
//  if (arr[mid] > target) {
//    return binarySearchHelper(arr, target, start, mid - 1);
//  }
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 5;
// console.log(binarySearch(arr, target));
// `;

const Compiler = () => {
  const [code, setCode] = useState(DefaultFormat.info[0].syntax);
 
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [Isanswer, setIsanswer] = useState(false);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const { asPath } = useRouter();
  const array = asPath.split("/");
  var question = array[3];
  var customOutput;
  var input;
  homeData.api_homeRevamp.map((data, i) => {
    if (data.type == "GoogleQuestions") {
      data.list.map((data, i) => {
        if (data.url == `/${question}`) {
          customOutput = data.output;
          input=data.input;
        }
      });
    }
  });

 var [customInput, setCustomInput] = useState(input);
  console.log(`output-${customOutput}`);
  var test;
  useEffect(() => {
    if (outputDetails) {
      test = atob(outputDetails.stdout);
      if (test == customOutput) {
        setIsanswer(true);
      } else {
        setIsanswer(false);
      }
    }
  }, [outputDetails]);

  // useEffect(() => {
  //   setCustomInput("")
  //   setOutputDetails(null)
  //   setIsanswer(false)

  //   DefaultFormat.info.map((data, i) => {
    
  //     if (data.title == language.name) {
  
  //     setCode(data.syntax)
  //     // alert(code)
  //     }

      
  //   });
  // }, [language]);

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    alert(input)
    customInput=input
    alert(customInput)
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "582896e24emsh530cde7edb39c38p1c9ca0jsn3e9abee0ad65",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: formData,
    };

    axios

      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        if (err.response) {
          let status = err.response.status;
          console.log("status", status);
          if (status === 429) {
            console.log("too many requests", status);

            showErrorToast(
              `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
              10000
            );
          }
          setProcessing(false);
          console.log("catch block...", error);
        }
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Key": "582896e24emsh530cde7edb39c38p1c9ca0jsn3e9abee0ad65",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      statusId = 4;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else if (statusId === 6) {
        setProcessing(false);
        setOutputDetails(response.data);
        showErrorToast(`Compilation Error`);
        console.log("response.data", response.data);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={styles.Compiler}>
      {/* v-{test} */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={styles.topBar}></div>
      <div className={styles.topContainer}>
        <div>
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div>
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.questionContainer}>
          <Question />
        </div>

        <div className={styles.codeEditor}>
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.name}
            theme={theme.value}
          />
        </div>

        <div className={styles.outputWindow}>
          <OutputWindow outputDetails={outputDetails} />
          <div className={styles.customInput}>
            
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />          </div>
            <button
              onClick={handleCompile}
              disabled={!code}
              className={styles.handleCompile}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>

          {outputDetails && (
            <OutputDetails outputDetails={outputDetails} Isanswer={Isanswer} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Compiler;
