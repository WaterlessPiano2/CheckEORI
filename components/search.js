import React, { useState } from "react";
import validate from "../utils/validation";

const axios = require("axios").default;

export default function Search({ result, error }) {
  const [input, setInput] = useState("");
  const [state, setState] = useState("IDLE");

  const sendInput = async () => {
    error("");
    setState("LOADING");

    const isValid = validate(input);
    if (isValid !== "VALID") {
      error(isValid);
      setState("ERROR");
      result("");
      return;
    }
    try {
      const response = await axios.post("/api/eori", { input });
      if (response && response.data && response.data.valid) {
        setState("SUCCESS");
        result(JSON.stringify(response.data));
      } else {
        error("The entered EORI is invalid.");
        setState("ERROR");
        result("");
        return;
      }
      console.log(response.data.valid);
    } catch (e) {
      console.log(e);
      error(e.response.data.error);
      setState("ERROR");
      result("");
    }
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="grid grid-rows-2 gap-4 px-4 py-5 sm:px-6 w-full">
      <input
        className={`p-2 block-inline text-2xl border-2 w-full  ${
          state === "ERROR" ? "border-red-500" : "border-gray-500"
        } rounded-md `}
        type="text"
        name="eoriInput"
        value={input}
        onChange={handleChangeInput}
      ></input>
      <button
        className="rounded-md bg-blue-500 text-gray-50 font-semibold text-2xl disabled:opacity-50 hover:bg-blue-700  "
        onClick={sendInput}
        disabled={state === "LOADING"}
      >
        Check
      </button>
    </div>
  );
}
