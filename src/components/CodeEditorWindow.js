import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import styles from "../../styles/Web/Landing.module.scss"

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };



  return (
    <div className={styles.editorWindow}>
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        className={styles.editorWindow}
        options={{
          minimap: {
            enabled: false,
          },
    }}
      />
    </div>
  );
};
export default CodeEditorWindow;
