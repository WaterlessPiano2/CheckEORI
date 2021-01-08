import Head from "next/head";
import React, { useState } from "react";
import validate from "../utils/validation";

const axios = require("axios").default;

export default function Home() {
  const [input, setInput] = useState("");
  const [state, setState] = useState("IDLE!");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");

  const sendInput = async () => {
    setErrorMessage("");
    setState("LOADING!");
    setResult("");

    const isValid = validate(input);
    if (isValid !== "VALID") {
      setErrorMessage(isValid);
      setState("ERROR:");
      setResult("");
    }
    try {
      const response = await axios.post("/api/eori", { input });
      setState("SUCCESS!");
      setResult(JSON.stringify(response.data));
    } catch (e) {
      console.log(e);
      setErrorMessage(e.response.data.error);
      setState("ERROR!");
    }
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center m-4 ">
        <div className="mt-20 flex flex-col sm:w-2/4 md:w-2/5 lg:w-1/4">
          <label>Enter the UK EORI number</label>
          <input
            className="max-h-8 mt-2 p-2 block-inline sm:text-sm border border-gray-500 rounded-md "
            type="text"
            name="eoriInput"
            value={input}
            onChange={handleChangeInput}
          ></input>
          <button
            className="mt-2 rounded bg-blue-500 text-gray-50 font-semibold py-2 disabled:opacity-50  hover:bg-blue-700  "
            onClick={sendInput}
            disabled={state === "LOADING"}
          >
            Check
          </button>
          <div>{state}</div>
          <div>{errorMessage}</div>
          <div className="mt-2 ">{result}</div>
        </div>
      </main>
    </div>
  );
}
