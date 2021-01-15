import Head from "next/head";
import Results from "../components/results";
import Warning from "../components/warning";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Authenticated TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="justify-center m-4 ">
        <Results />
        <Warning />
      </main>
    </div>
  );
}
