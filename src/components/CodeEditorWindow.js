import React, { useState, useEffect } from "react";

import Editor from "@monaco-editor/react";
import styles from "../../styles/Web/Landing.module.scss"
import { DefaultFormat } from "../../data/DefaultFormat"

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code);

  //  const element = document.getElementById("myInput"); 
  // document.querySelector(".monaco-editor .margin").classList.add("editor")

console.log(code)
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  
  };

  useEffect(() => {

    DefaultFormat.info.map((data, i) => {

      if (data.title == language) {
  
      setValue(data.syntax)

      }
      
    });
  }, [language]);

  return (
    <div className={styles.editorWindow}>
      <Editor
        height="85vh"
        width={`100%`}
        padding="85vh"
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        className={styles.editorWindow}
        options={{
          minimap: {
            enabled: true,
          },
    }}
      />
    </div>
  );
};
export default CodeEditorWindow;
