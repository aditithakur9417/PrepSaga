import React from 'react'
import { languageInfo } from "../../data/languageInfo";
import styles from "../../styles/Web/GoogleQuestions.module.scss"
import { useRouter } from 'next/router'
import { data } from 'autoprefixer';

export default function Test(appdata){

    languageInfo.info.map((data, i) => {
        if (data.title == "Google") {
   
          appdata = data;
        }
      });

      return(
        <div>
            
           data - {appdata.title}
        </div>
      )
}