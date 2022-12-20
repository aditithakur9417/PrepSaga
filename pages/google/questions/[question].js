import React from "react";
import { useRouter } from "next/router";
import { homeData } from "../../../data/homeData";

export default function Question() {
  const { asPath } = useRouter();
  const array = asPath.split("/");

  var question = array[3];
  var content = "";
  homeData.api_homeRevamp.map((data, i) => {
    if (data.type == "GoogleQuestions") {
      data.list.map((data, i) => {
        if (data.url == question) {
          content = data.content;
        }
      });
    }
  });

  return (
  <div>
    {array[3]}
    {content}
  </div>s
  )
}
