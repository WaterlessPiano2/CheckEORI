import Head from "next/head";
import React, { useState } from "react";
import Results from "../components/results";
import Search from "../components/search";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center m-4 ">
        <h1>GB123456789003</h1>
        <Search result={(e) => setResult(e)} />
        {result && <Results result={result} />}
      </main>
    </div>
  );
}
