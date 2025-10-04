import { useContext } from "react";
import { themeContext } from "./context";

function AnotherChild() {
  const themeC = useContext(themeContext);
  console.log(themeC);

  return (
    <>
      <h1>I am a {themeC} heading</h1>
    </>
  );
}

export default AnotherChild;
