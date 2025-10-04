import React from "react";
import { themeContext } from "./context";
import GrandChild from "./GrandChild";
import AnotherChild from "./AnotherChild";

function MyPage() {
  return (
    <>
      <themeContext.Provider value="schoollll">
        <GrandChild />
        <AnotherChild />
      </themeContext.Provider>
    </>
  );
}

export default MyPage;
