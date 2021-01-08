import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const sendInput = () => {
    if (!input) {
      console.log("Error: Enter EORI");
      return;
    }
    console.log(input);
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
      <main className="flex  justify-center">
        <div className="mt-20 contact-form grid grid-cols-1 grid-rows-3 gap-4 sm:w-2/4 md:w-2/5 lg:w-1/4">
          <label>Enter an UK EORI number</label>
          <input
            className="max-h-8 p-2 block-inline sm:text-sm border border-gray-500 rounded-md "
            type="text"
            name="eoriInput"
            value={input}
            onChange={handleChangeInput}
          ></input>
          <button className="rounded bg-blue-400 " onClick={sendInput}>
            Check
          </button>
        </div>
      </main>
    </div>
  );
}
