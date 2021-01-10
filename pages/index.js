import Head from "next/head";
import Results from "../components/results";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center m-4 ">
        <Results/>
      </main>
    </div>
  );
}
