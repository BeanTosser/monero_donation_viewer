import { useState } from "react";

export default function (props) {
  const [enteredText, setEnteredText] = useState("");

  const changeText = function (event) {
    setEnteredText(event.value);
    verifyValidInput(event.value);
  };

  const verifyValidInput = function (input) {
    if ("something") {
      return true;
    } else {
      return false;
    }
  };

  return <textarea value={enteredText} onchange={changeText} />;
}
