import { useState } from "react";
import { MoneroUtils, MoneroNetworkType } from "monero-javascript";

export default function (props) {
  const [enteredText, setEnteredText] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);

  const changeText = function (event) {
    setEnteredText(event.value);
    verifyValidInput(event.value);
    console.log("AddressIsValid: " + inputIsValid);
    console.log("Entered value: " + event.value);
    console.log("enteredText(state): " + enteredText);
  };

  const verifyValidInput = function (input) {
    if (
      MoneroUtils.isValidAddress(input, MoneroNetworkType.STAGENET) |
      (input === "")
    ) {
      // An empty address ("") is always considered valid
      setInputIsValid(true);
    } else {
      setInputIsValid(false);
    }
  };

  let bgColor = "red";

  if (inputIsValid) {
    bgColor = "white";
  }

  return (
    <textarea
      value={enteredText}
      onChange={changeText}
      placeholder="Enter a valid Monero wallet address"
      style={{
        backgroundColor: bgColor
      }}
    />
  );
}
