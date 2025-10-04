import React from "react";
import { useContext } from "react";
import { themeContext } from "./context";

function GrandChild() {
  const theme = useContext(themeContext);

  return (
    <>
      <button>I am a {theme} button </button>
    </>
  );
}

export default GrandChild;
