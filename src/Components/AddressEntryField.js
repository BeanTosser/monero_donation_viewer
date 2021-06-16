import { useState } from "react";
import { MoneroUtils, MoneroNetworkType } from "monero-javascript";
import "./css/AddressEntryField.css";

export default function (props) {
  const [enteredText, setEnteredText] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);

  const changeText = function (event) {
    setEnteredText(event.target.value);
    verifyValidInput(event.target.value);
  };

  const verifyValidInput = function (input) {
    console.log(
      "Valid? " + MoneroUtils.isValidAddress(input, MoneroNetworkType.MAINNET)
    );
    if (
      (input === "") |
      MoneroUtils.isValidAddress(input, MoneroNetworkType.MAINNET)
    ) {
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
      className="address_entry_field"
      value={enteredText}
      onChange={changeText}
      placeholder="Enter a valid Monero wallet address"
      style={{
        backgroundColor: bgColor
      }}
    />
  );
}
